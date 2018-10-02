<template>
  <div class="sumarokovo">
    <div class="layout">
      <div class="sumarokovo-header">
        <div class="sumarokovo-header-icon">
          <img src="/img/pages/home/sumarokovo/header-icon.png" alt="">
        </div>
        <h2 class="sumarokovo-header-title">
          Реабилитацион&shy;ный центр «Сумароково»
        </h2>
      </div>
    </div>
    <div class="sumarokovo-body">
      <div class="layout">
        <h3 class="sumarokovo-body-title">
          На протяжении основного этапа реабилитации воспитанники живут<br>
          в двухэтажном доме в с. Сумароково.
        </h3>
        <div class="sumarokovo-body-wrapper">
          <ul class="sumarokovo-body-wrapper-list points">
            <li class="sumarokovo-body-wrapper-list-item">
              <div class="sumarokovo-body-wrapper-list-item-icon">
                <img src="/img/pages/home/sumarokovo/icon-1.png" alt="">
              </div>
            </li>
            <li class="sumarokovo-body-wrapper-list-item">
              В центре могут проживать 12 человек единовременно.
            </li>
            <li class="sumarokovo-body-wrapper-list-item">
              Комнаты рассчитаны на 2-4 человека.
            </li>
            <li class="sumarokovo-body-wrapper-list-item">
              Гостиница для родственников.
            </li>
          </ul>
          <ul class="sumarokovo-body-wrapper-list">
            <li class="sumarokovo-body-wrapper-list-item">
              <h4 class="sumarokovo-body-wrapper-list-item-title">
                В доме имеется:
              </h4>
            </li>
            <li class="sumarokovo-body-wrapper-list-item" v-for="item in list[0]">
              <div class="sumarokovo-body-wrapper-list-item-icon">
                <img :src="'/img/pages/home/sumarokovo/' + item.icon" alt="">
              </div>
              <span class="sumarokovo-body-wrapper-list-item-text">
                {{ item.name }}
              </span>
            </li>
          </ul>
          <ul class="sumarokovo-body-wrapper-list">
            <li class="sumarokovo-body-wrapper-list-item">
              <h4 class="sumarokovo-body-wrapper-list-item-title">
                На территории расположены:
              </h4>
            </li>
            <li class="sumarokovo-body-wrapper-list-item" v-for="item in list[1]">
              <div class="sumarokovo-body-wrapper-list-item-icon">
                <img :src="'/img/pages/home/sumarokovo/' + item.icon" alt="">
              </div>
              <span class="sumarokovo-body-wrapper-list-item-text">
                {{ item.name }}
              </span>
            </li>
          </ul>
        </div>
        <div class="sumarokovo-body-gallery">
          <swiper class="sumarokovo-body-gallery-swiper" :options="swiperOption">
            <swiper-slide class="sumarokovo-body-gallery-swiper-slide" v-for="(swiperSlide, index) in slides" :key="'swiper-slide-' + index" :style="swiperSlideStyle(swiperSlide.image)"></swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .sumarokovo {
    &-header {
      align-items: flex-end;
      display: flex;
      justify-content: center;
      height: 170px;
      padding-bottom: 20px;

      &-icon {
        flex-shrink: 0;
        left: 7px;
        margin-right: -38px;
        position: relative;
        top: 2px;
      }

      &-title {
        font-size: em(48);
        position: relative;
        text-align: center;

        &:after {
          background-color: $accentColor;
          bottom: -1px;
          content: '';
          height: 2px;
          left: -10px;
          position: absolute;
          width: calc(100% + 10px);
        }
      }
    }

    &-body {
      background-color: $light;
      box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.125);
      padding: 30px 0 5px;

      &-title {
        color: $blue;
        font-family: Calibri, sans-serif;
        font-size: 1.25em;
        font-weight: bold;
        margin: 0 auto;
        text-align: center;
      }

      &-wrapper {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;

        @include adopt(768px) {
          flex-wrap: wrap;
        }

        &-list {
          @include adopt(768px) {
            width: 50%;
          }

          &-item {
            align-items: flex-end;
            display: flex;
            margin-top: 30px;

            &-title {
              font-family: Calibri, sans-serif;
              font-weight: bold;
            }

            &-icon {
              margin-right: 15px;
            }

            &-text {

            }
          }

          &.points {
            max-width: 270px;

            @include adopt(768px) {
              max-width: none;
              width: 100%;
            }

            li:not(:first-of-type) {
              align-items: flex-start;
              display: flex;
              margin-top: 20px;

              &:before {
                background-color: $green;
                border-radius: 50%;
                content: '';
                display: block;
                flex-shrink: 0;
                height: 10px;
                margin-right: 20px;
                position: relative;
                top: 12px;
                width: 10px;
              }
            }
          }
        }
      }

      &-gallery {
        &-swiper {
          &-slide {
            background-position: center;
            background-repeat: no-repeat;
            //background-size: cover;
            padding: 200px 0;

            @include adopt(768px) {
              padding: 150px 0;
            }
          }
        }
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        list: [
          [
            {
              icon: 'icon-2.png',
              name: 'молитвенная комната'
            },
            {
              icon: 'icon-3.png',
              name: 'библиотека'
            },
            {
              icon: 'icon-4.png',
              name: 'трапезная'
            },
            {
              icon: 'icon-5.png',
              name: 'душ с удобствами'
            }
          ],
          [
            {
              icon: 'icon-6.png',
              name: 'баня'
            },
            {
              icon: 'icon-7.png',
              name: 'птичник'
            },
            {
              icon: 'icon-8.png',
              name: 'огород'
            }
          ]
        ],
        slides: [
          {
            image: 'photo-1.png'
          },
          {
            image: 'photo-2.png'
          },
          {
            image: 'photo-3.png'
          }
        ],
        swiperOption: {
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          centeredSlides: true,
          loop: true
        }
      }
    },
    methods: {
      swiperSlideStyle(image) {
        return 'background-image: url(\'/img/pages/home/sumarokovo/gallery/' + image + '\');';
      }
    }
  }
</script>
