<template>
  <div id="news" class="news">
    <v-phones />
    <div class="layout">
      <ul class="news-list" v-if="list">
        <li class="news-list-item" v-for="listItem in list">
          <a class="news-list-item-link">
            <div class="news-list-item-link-image" :style="imageStyle(listItem.image)" v-if="listItem.image"></div>
            <div class="news-list-item-link-inside">
              <p class="news-list-item-link-inside-date">
                {{ correctDate(listItem.created) }}
              </p>
              <h2 class="news-list-item-link-inside-title" v-html="listItem.title"></h2>
              <div class="news-list-item-link-inside-full" v-html="listItem.full" v-if="listItem.fullIsActive"></div>
              <div class="news-list-item-link-inside-short" v-html="listItem.short" v-else></div>
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
    </div>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .news {
    &-list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -20px;

      &-item {
        margin-top: 40px;
        padding: 0 20px;
        width: 50%;

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
            }

            &-short {
              font-size: em(18);
              font-weight: 300;
              margin-top: 1em;
            }

            &-full {
              font-size: em(18);
              font-weight: 300;
              margin-top: 1em;
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
  import vPhones from '@/js/components/common/phones.vue';
  import axios from 'axios';

  export default {
    data() {
      return {
        list: [],
        title: 'Новости'
      }
    },
    methods: {
      imageStyle(image) {
        return 'background: url(\'' + image + '\') no-repeat center / cover';
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
        return date.getDate() + ' ' + months[date.getMonth()];
      },
      getNews() {
        let then = this;
        axios.post('/actions/news.php')
        .then(function (response) {
          then.list = response.data;
        })
        .catch(function (error) {
          alert('Произошла ошибка!');
          console.log(error);
        });
      }
    },
    created() {
      document.title = this.title;
      this.getNews();
    },
    components: {
      vPhones
    }
  }
</script>
