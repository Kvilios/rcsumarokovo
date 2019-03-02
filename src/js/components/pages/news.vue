<template>
  <div id="news" class="news">
    <div class="adopt920">
        <v-menu />
    </div>
    <v-phones />
    <div class="layout">
      <template v-if="isLoading">
        <div class="news-preloader">
          <img src="/img/pages/news/preloader.gif" alt="">
        </div>
      </template>
      <template v-else>
        <ul class="news-list" v-if="list.length">
          <li class="news-list-item" :key="listItem.id" v-for="listItem in list">
            <a class="news-list-item-link">
              <div class="news-list-item-link-image" :style="imageStyle(listItem.image)" v-if="listItem.image"></div>
              <div class="news-list-item-link-inside">
                <p class="news-list-item-link-inside-date">
                  {{ correctDate(listItem.created) }}
                </p>
                <h2 class="news-list-item-link-inside-title">
                  {{ listItem.title }}
                </h2>
                <div class="news-list-item-link-inside-full" v-html="listItem.full" v-if="listItem.fullIsActive"></div>
                <div class="news-list-item-link-inside-short" v-else>
                  {{ listItem.short }}
                </div>
                <button class="news-list-item-link-inside-button animate" v-if="!listItem.fullIsActive && listItem.full" @click="listItem.fullIsActive = true">
                  Читать полностью...
                </button>
              </div>
            </a>
          </li>
        </ul>
        <p class="news-empty" v-else>
          В данный момент новостей нет, пожалуйста, зайдите позже.
        </p>
        <v-pagination @select="selectHandler" :pagination="pagination" />
      </template>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .news {
    &-preloader {
      align-items: center;
      display: flex;
      justify-content: center;

      img {
        display: block;
      }
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -20px;

      @include adopt(920px) {
        flex-direction: column;
      }

      &-item {
        margin-top: 40px;
        padding: 0 20px;
        width: 50%;

        @include adopt(920px) {
          width: 100%;
        }

        &:first-of-type {
          @include adopt(920px) {
            margin-top: 0;
          }
        }

        &-link {
          &-image {
            border: 10px solid $light;
            height: 336px;
            width: 100%;
          }

          &-inside {
            border: 3px dashed $light;
            border-top: none;
            padding: 10px;

            &-date {
              align-items: center;
              display: flex;
              font-size: em(14);
              margin-bottom: 2px;

              @include adopt(920px) {
                font-size: em(24);
              }

              &:before {
                background-color: $green;
                border-radius: 50%;
                content: '';
                display: block;
                flex-shrink: 0;
                height: 10px;
                margin-right: 10px;
                width: 10px;
              }
            }

            &-title {
              color: $blue;
              font-family: Calibri, sans-serif;
              font-size: em(22);
              font-weight: bold;

              @include adopt(920px) {
                font-size: em(48);
              }
            }

            &-short {
              font-size: em(18);
              font-weight: 300;
              margin-top: 1em;

              @include adopt(920px) {
                font-size: em(32);
              }
            }

            &-full {
              font-size: em(18);
              font-weight: 300;
              margin-top: 1em;

              @include adopt(920px) {
                font-size: em(32);
              }
            }

            &-button {
              background-color: rgba(0, 0, 0, 0);
              border: none;
              color: $blue;
              cursor: pointer;
              font-family: Calibri, sans-serif;
              font-size: em(18);
              font-weight: 300;
              margin: 1em 0 0;
              padding: 0;

              @include adopt(920px) {
                font-size: em(32);
              }

              &:hover {
                color: lighten($blue, 10%);
              }
            }
          }
        }
      }
    }

    &-empty {
      margin-top: 100px;
      text-align: center;
    }
  }
</style>

<script>
  import vMenu from '@/js/components/pages/home/menu.vue';
  import vPhones from '@/js/components/common/phones.vue';
  import vPagination from '@/js/components/common/pagination.vue';
  import axios from 'axios';

  export default {
    data() {
      return {
        isLoading: false,
        list: [],
        pagination: {
          currentPage: 1,
          perPage: 10,
          totalPages: 1
        },
        title: 'Новости',
      }
    },
    methods: {
      imageStyle(image) {
        return 'background: #ddf2f8 url(\'' + image + '\') no-repeat center / contain';
      },
      correctDate(timestamp) {
        let date = new Date(Date.parse(timestamp));
        let months = [
          'января',
          'февраля',
          'марта',
          'апреля',
          'мая',
          'июня',
          'июля',
          'августа',
          'сентября',
          'октября',
          'ноября',
          'декабря'
        ];
        return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' г.';
      },
      getNews() {
        this.isLoading = true;
        let then = this;
        axios.get(`/actions/news.php?page=${this.pagination.currentPage}&per_page=${this.pagination.perPage}`)
        .then(response => {
          this.isLoading = false;
          if (response.data === 'error') {
            alert('Произошла ошибка!')
            console.log('Код ошибки: 2')
          } else {
            then.pagination.totalPages = response.data.total;

            then.list = response.data.list;
          }
        })
        .catch(error => {
          this.isLoading = false;
          alert('Произошла ошибка!');
          console.log('Код ошибки: 1')
        });
      },
      selectHandler(page) {
        this.getNews();
      }
    },
    created() {
      document.title = this.title;
      this.getNews();
    },
    components: {
      vMenu,
      vPhones,
      vPagination
    }
  }
</script>
