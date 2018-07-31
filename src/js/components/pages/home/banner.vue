<template>
  <div class="banner">
    <swiper class="banner-swiper" :options="swiperOption">
      <swiper-slide class="banner-swiper-slide" v-for="(swiperSlide, index) in slides" :key="'swiper-slide-' + index" :style="swiperSlideStyle(swiperSlide.image)">
        <div class="layout">
          <div class="banner-callback">
            <h1 class="banner-title">
              Церковная помощь<br>
              алко- и наркозависимым
            </h1>
            <p class="banner-tagline">
              Звони!<br>
              Поможем!
            </p>
            <ul class="banner-phones">
              <li>
                +7 (915) 901 27 77
              </li>
            </ul>
            <p class="banner-callme" @click="showCallback">
              <img src="/img/pages/home/banner/icon.png" alt="">
              <span>
                Обратный звонок
              </span>
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <modal name="banner-callback">
      <div class="banner-callback-wrapper">
        <h2 class="banner-callback-wrapper-title">
          Мы перезвоним Вам!
        </h2>
        <form class="banner-callback-wrapper-form" @submit.prevent="sendForm">
          <input type="text" v-model="formData.name" placeholder="Ваше имя" required>
          <masked-input type="tel" v-model="formData.phone" placeholder="Ваш телефон" mask="\+\7 (111) 111-11-11" required />
          <button type="submit animate">
            Заказать звонок
          </button>
        </form>
      </div>
    </modal>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .banner {
    &-swiper {
      &-slide {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    &-callback {
      background-color: rgba(white, .5);
      display: flex;
      flex-direction: column;
      padding: 115px 0 32px;
      width: 262px;
    }

    &-title {
      font-size: em(20);
      text-align: center;
    }

    &-tagline {
      font-family: Garamond, serif;
      font-size: em(40);
      margin: 55px 0;
      text-align: center;
    }

    &-phones {
      font-family: Garamond, serif;
      font-size: em(32);
      text-align: center;

      li {
        //cursor: pointer;
      }
    }

    &-callme {
      cursor: pointer;
      display: flex;
      justify-content: center;
      margin-top: 32px;
      width: 100%;

      &:hover {
        span {
          text-decoration: underline;
        }
      }

      img {
        margin-right: 10px;
      }

      span {
        font-family: Garamond, serif;
        font-weight: bold;
      }
    }

    &-callback {
      &-wrapper {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        padding: 10px;

        &-title {
          font-size: 1.5em;
          margin-bottom: 12.5px;
          text-align: center;
        }

        &-form {
          align-items: center;
          display: flex;
          flex-direction: column;

          input {
            border: none;
            border-radius: 10px;
            box-shadow: inset 3px 3px 4px rgba(0, 0, 0, .1875);
            color: #313a3f;
            font-family: Calibri, sans-serif;
            font-size: 24px;
            height: 60px;
            margin: 12.5px 0;
            max-width: 535px;
            padding: 0 25px;
            width: 100%;
          }

          button {
            background-color: rgba(0, 0, 0, 0);
            border: none;
            color: $dark-text;
            cursor: pointer;
            font-family: Garamond, serif;
            font-size: 1.5em;
            font-weight: bold;
            margin: 12.5px 0 0;
            padding: 0;
            text-align: center;

            &:hover {
              color: lighten($dark-text, 10%);
            }
          }
        }
      }
    }
  }
</style>

<script>
  import MaskedInput from 'vue-masked-input';
  import axios from 'axios';

  export default {
    data() {
      return {
        formData: {
          name: '',
          phone: ''
        },
        slides: [
          {
            image: 'image-1.jpg'
          },
          {
            image: 'image-2.jpg'
          },
          {
            image: 'image-3.jpg'
          }
        ],
        swiperOption: {
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          effect: 'fade',
          speed: 2500
        }
      }
    },
    methods: {
      sendForm() {
        if (this.formData.name.length > 1 && this.formData.phone.length == 18) {
          let then = this;
          axios.post('/actions/mail.php', this.formData)
          .then(function (response) {
            alert('Сообщение отправлено!');
            then.formData.name = '';
            then.formData.phone = '';
            then.hideCallback();
          })
          .catch(function (error) {
            alert('Произошла ошибка!');
            console.log(error);
          });
        }
      },
      swiperSlideStyle(image) {
        return 'background-image: url(\'/img/pages/home/banner/' + image + '\');';
      },
      showCallback() {
        this.$modal.show('banner-callback');
      },
      hideCallback() {
        this.$modal.hide('banner-callback');
      }
    },
    components: {
      MaskedInput
    }
  }
</script>
