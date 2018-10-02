<template>
  <div class="banner">
    <swiper class="banner-swiper" :options="swiperOption">
      <swiper-slide class="banner-swiper-slide" v-for="(swiperSlide, index) in slides" :key="'swiper-slide-' + index" :style="swiperSlideStyle(swiperSlide.image)">
        <div class="layout">
          <div class="banner-callback">
            <h1 class="banner-title">
              Благотворительный фонд<br>
              &laquo;преподобного<br>
              Геннадия Костромского<br>
              и Любимоградского&raquo;
            </h1>
            <p class="banner-subtitle">
              Церковная помощь<br>
              алко- и наркозависимым
            </p>
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

        @include adopt(480px) {
          min-height: 300px;
        }
      }
    }

    &-callback {
      background-color: rgba(white, .5);
      display: flex;
      flex-direction: column;
      padding: 115px 0 32px;
      width: 262px;

      @include adopt(768px) {
          padding: 72px 0 64px;
      }

      @include adopt(480px) {
        display: none;
      }
    }

    &-title {
      font-size: em(20);
      margin-bottom: 22.5px;
      text-align: center;

      @include adopt(920px) {
        font-size: em(24);
      }

      @include adopt(768px) {
        font-size: em(24);
      }
    }

    &-subtitle {
      font-size: em(20);
      font-weight: bold;
      text-align: center;

      @include adopt(920px) {
        font-size: em(24);
      }

      @include adopt(768px) {
        font-size: em(24);
      }
    }

    &-tagline {
      font-family: Garamond, serif;
      font-size: em(40);
      margin: 10px 0;
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
  }
</style>

<script>
  export default {
    data() {
      return {
        adopt: 0,
        slides: [
          {
            image: 'image-1.png'
          },
          {
            image: 'image-2.png'
          },
          {
            image: 'image-3.png'
          }
        ],
        swiperOption: {
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          effect: 'fade',
          speed: 2500
        }
      }
    },
    computed: {
      currentAdopt() {
          let result;
          if (this.adopt >= 0 && this.adopt <= 480) result = 480;
          else if (this.adopt > 480 && this.adopt <= 768) result = 768;
          else if (this.adopt > 768 && this.adopt <= 920) result = 920;
          return result;
      }
    },
    methods: {
      swiperSlideStyle(image) {
        return 'background: url(\'/img/pages/home/banner/' + (this.currentAdopt ? this.currentAdopt + '/' : '') + image + '\') no-repeat center center / cover;';
      },
      showCallback() {
        this.$modal.show('header-callback');
      },
      updateAdopt(e = null) {
          this.adopt = window.outerWidth;
      }
    },
    created() {
        window.addEventListener('resize', this.updateAdopt);
        this.updateAdopt();
    },
    beforeDestroy() {
        window.addEventListener('resize', this.updateAdopt);
    }
  }
</script>
