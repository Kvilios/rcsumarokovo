<template>
  <div id="header" class="header">
    <div class="layout">
      <div class="header-wrapper">
        <div class="header-logotype">
          <img v-if="isHome" src="/img/layouts/header/logotype.png" alt="">
          <router-link v-else to="/">
            <img src="/img/layouts/header/logotype.png" alt="">
          </router-link>
        </div>
        <div class="header-wrapper-wrapper">
          <v-socials />
          <v-navigation />
          <div class="adopt920">
            <p class="header-wrapper-wrapper-callme" @click="showCallback">
              <img src="/img/pages/home/banner/icon.png" alt="">
              <span>
                Обратный звонок
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <modal name="header-callback">
      <div class="header-callback-wrapper">
        <h2 class="header-callback-wrapper-title">
          Мы перезвоним Вам!
        </h2>
        <form class="header-callback-wrapper-form" @submit.prevent="sendForm">
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

  .header {
    box-shadow: 0 4px 8px 0 rgba(black, .25);
    position: relative;
    z-index: 2;

    &-wrapper {
      display: flex;
      justify-content: space-between;
      max-height: 100px;
      padding: $padding 0;

      &-wrapper {
        align-items: flex-end;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: space-between;

        @include adopt(920px) {
          justify-content: center;
        }

        &-callme {
          align-items: center;
          cursor: pointer;
          display: flex;
          font-size: em(32);
          justify-content: center;
          width: 100%;

          &:hover {
            span {
              text-decoration: underline;
            }
          }

          img {
            height: 29px;
            margin-right: 10px;
            width: 17px;
          }

          span {
            font-family: Garamond, serif;
            font-weight: bold;
          }
        }
      }
    }

    &-logotype {
      display: flex;
      justify-content: center;
      margin-bottom: -85px;
      width: 262px;

      img {
        background-color: white;
        border: 1px solid white;
        box-shadow: 0 4px 8px 0 rgba(black, .25);
        height: 170px;
        border-radius: 50%;
        width: 170px;
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
  import vSocials from '@/js/components/layouts/header/socials.vue';
  import vNavigation from '@/js/components/layouts/header/navigation.vue';

  export default {
    data() {
      return {
        formData: {
          name: '',
          phone: ''
        }
      }
    },
    components: {
      MaskedInput,
      vSocials,
      vNavigation
    },
    computed: {
      isHome() {
        return this.$route.name === 'home';
      }
    },
    methods: {
        showCallback() {
            this.$modal.show('header-callback');
        },
        hideCallback() {
          this.$modal.hide('header-callback');
        },
        sendForm() {
          this.formData.name = this.formData.name.replace(/\s\s+/g, ' ');
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
      }
    }
  }
</script>
