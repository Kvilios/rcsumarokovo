<template>
  <div class="apartment">
    <div class="layout">
      <div class="apartment-header">
        <div class="apartment-header-icon">
          <img src="/img/pages/home/apartment/icon-1.png" alt="">
        </div>
        <h2 class="apartment-header-title">
          Адаптационная квартира
        </h2>
      </div>
      <div class="apartment-wrapper">
        <ul class="apartment-wrapper-list">
          <li class="apartment-wrapper-list-item">
            <div class="apartment-wrapper-list-item-icon">
              <img src="/img/pages/home/apartment/icon-2.png" alt="">
            </div>
          </li>
          <li class="apartment-wrapper-list-item" v-for="listItem in list[0]" v-html="listItem.name">
          </li>
        </ul>
        <ul class="apartment-wrapper-list">
          <li class="apartment-wrapper-list-item">
            <div class="apartment-wrapper-list-item-icon">
              <img src="/img/pages/home/apartment/icon-3.png" alt="">
            </div>
            <h3 class="apartment-wrapper-list-item-title">
              Включает в себя:
            </h3>
          </li>
          <li class="apartment-wrapper-list-item" v-for="listItem in list[1]" v-html="listItem.name">
          </li>
        </ul>
      </div>
      <div class="apartment-photos">
        <swiper class="apartment-photos-swiper" :options="swiperOption">
          <swiper-slide class="apartment-photos-swiper-slide" v-for="(swiperSlide, index) in slides" :key="'swiper-slide-' + index" :style="swiperSlideStyle(swiperSlide.image)"></swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .apartment {
    &-header {
      align-items: flex-end;
      display: flex;
      justify-content: center;
      padding: 30px 0;

      &-icon {
        margin-right: 20px;
        position: relative;
        top: 7px;
      }

      &-title {
        font-size: 2em;
        line-height: 40px;
        position: relative;
        text-align: center;

        &:after {
          background-color: $accentColor;
          bottom: -8px;
          content: '';
          height: 2px;
          left: -107px;
          position: absolute;
          width: calc(100% + 107px);
        }
      }
    }

    &-wrapper {
      display: flex;
      justify-content: space-between;
      margin: 0 -15px;

      &-list {
        padding: 0 15px;
        width: 50%;

        /*&:first-child {
          width: 60%;
        }

        &:last-child {
          width: 40%;
        }*/

        &-item {
          &:not(:first-of-type) {
            align-items: flex-start;
            display: flex;
            margin-top: 15px;

            &:before {
              background-color: $green;
              border-radius: 50%;
              content: '';
              display: block;
              flex-shrink: 0;
              height: 10px;
              margin-right: 22px;
              position: relative;
              top: 12px;
              width: 10px;
            }
          }

          &:first-of-type {
            align-items: center;
            display: flex;
          }

          &-icon {
            margin-right: 8px;
          }

          &-title {
            color: $accentColor;
            font-family: Calibri, sans-serif;
          }
        }

        &:last-of-type {
          .apartment-wrapper-list-item {
            &:not(:first-of-type) {
              margin-left: 15px;
            }
          }
        }
      }
    }

    &-photos {
      &-swiper {
        margin: 30px 0;

        &-slide {
          padding: 205px 0;

          @include adopt(768px) {
            padding: 150px 0;
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
              name: 'Расположена в черте города.'
            },
            {
              name: 'Вмещает 6 воспитанников.'
            },
            {
              name: 'В квартире постоянно присутствует сотрудник.'
            },
            {
              name: 'Имеется вся необходимая бытовая техника<br>(чайник, стиральная машина, холодильник и т.д.)'
            },
            {
              name: 'Есть возможность посещать спортзал.'
            }
          ],
          [
            {
              name: 'Трезвый образ жизни.'
            },
            {
              name: 'Участие в мероприятиях.'
            },
            {
              name: 'Соблюдение распорядка дня.'
            },
            {
              name: 'Соблюдение личной гигиены<br>и уборку помещения.'
            },
            {
              name: 'Тишину в вечернее<br>и ночное время с 24:00 до 7:00.'
            }
          ]
        ],
        slides: [
          {
            image: 'photo-1.jpg'
          },
          {
            image: 'photo-2.jpg'
          },
          {
            image: 'photo-3.jpg'
          },
          {
            image: 'photo-4.jpg'
          },
          {
            image: 'photo-5.jpg'
          },
          {
            image: 'photo-6.jpg'
          }
        ],
        swiperOption: {
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          loop: true,
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 40,
          breakpoints: {
              484: {
                  slidesPerGroup: 1,
                  slidesPerView: 1,
                  spaceBetween: 0,
              }
          }
        }
      }
    },
    methods: {
      swiperSlideStyle(image) {
        return 'background: url(\'/img/pages/home/apartment/' + image + '\') no-repeat center / cover;';
      }
    }
  }
</script>
