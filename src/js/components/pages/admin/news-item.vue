<template>
  <li class="news-item">
    <div class="news-item-panel">
        <div class="news-item-panel-dates" v-if="data.id">
            <p class="news-item-panel-dates-created">
                Создано: {{ correctDate(data.created) }}
            </p>
            <p class="news-item-panel-dates-updated">
                Обновлено: {{ correctDate(data.updated) }}
            </p>
        </div>
        <p class="news-item-panel-new" v-else>
            Новая запись
        </p>
        <div class="news-item-panel-buttons">
            <button class="news-item-panel-buttons-save" @click="saveNewsItem">
                Сохранить
            </button>
            <button class="news-item-panel-buttons-hidden" @click="toggleHidden">
                {{ data.hidden ? 'Показать' : 'Скрыть' }}
            </button>
            <button class="news-item-panel-buttons-delete" @click="deleteNewsItem">
                Удалить{{ counter ? '?' : '!' }}
            </button>
        </div>
    </div>
    <div class="news-item-content" :class="{'hidden': data.hidden}">
        <h3 class="news-item-content-title">
            Изображение:
        </h3>
        <div class="news-item-content-upload">
            <div class="news-item-content-upload-edit">
                <base64-upload  class="news-item-content-upload-edit-change" @change="onChangeImage">
                    Изменить
                </base64-upload>
                <button class="news-item-content-upload-edit-remove" @click="onRemoveImage">
                    Удалить
                </button>
            </div>
            <img class="news-item-content-upload-image" :src="image ? image : '/img/pages/news/no-image.svg'" alt="">
        </div>
        <h3 class="news-item-content-title">
            Заголовок:
        </h3>
        <input class="news-item-content-input" type="text" v-model="data.title">
        <h3 class="news-item-content-title">
            Описание:
        </h3>
        <quill-editor class="news-item-content-editor" v-model="data.full" :options="editorOption" />
    </div>
  </li>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .news-item {
    background-color: white;
    border-radius: 4px;
    box-shadow: 4px 4px 16px 0 rgba(black, .1);
    min-width: 320px;
    padding: 16px;

    &-panel {
        margin-bottom: 16px;

        &-dates {
            &-created {
                color: $accentColor;
                font-size: .5em;
            }

            &-updated {
                color: $accentColor;
                font-size: .5em;
            }
        }

        &-new {
            color: $accentColor;
            font-size: .5em;
        }
    }
    
    &-content {
        transition: all .1s ease-in-out;

        &.hidden {
            opacity: .5;
        }

        &-title {
            margin-bottom: 8px;
        }

        &-upload {
            margin-bottom: 32px;
            max-width: 320px;
            position: relative;

            &:hover &-edit {
                opacity: 1;
            }

            &-edit {
                align-items: center;
                background-color: rgba(black, .5);
                bottom: 0;
                color: white;
                display: flex;
                height: 100%;
                justify-content: center;
                left: 0;
                opacity: 0;
                position: absolute;
                right: 0;
                text-align: center;
                transition: all .1s ease-in-out;
                top: 0;
                width: 100%;

                &-change {

                }

                &-remove {
                    position: absolute;
                    right: 0;
                    top: 0;
                }
            }

            &-image {
                width: 100%;
            }
        }

        &-input {
            border: 1px solid #ccc;
            color: $dark-text;
            font-family: Calibri, sans-serif;
            font-size: #{$font-size}px;
            margin-bottom: 32px;
            padding: 8px 16px;
            width: 100%;
        }
    }
  }
</style>

<script>
  import Base64Upload from 'vue-base64-upload'

  export default {
    components: {
        Base64Upload
    },
    props: ['data'],
    data() {
        return {
            editorOption: {
                placeholder: ''
            },
            counter: 1,
            images: []
        }
    },
    computed: {
        image() {
            return this.images.length ? this.images[this.images.length - 1] : (this.data.image ? this.data.image : '')
        }
    },
    methods: {
        correctDate(timestamp) {
            let date = new Date(Date.parse(timestamp))
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
        return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' года в ' + timestamp.split(' ')[1]
      },
      saveNewsItem() {
          this.$store.commit('saveNewsItem', this.data)
      },
      toggleHidden() {
          this.$store.commit('updateNewsItemHidden', {id: this.data.id, hidden: this.data.hidden})
      },
      deleteNewsItem() {
          this.counter ? this.counter-- : this.$store.commit('deleteNewsItem', {id: this.data.id})
      },
      onChangeImage(image) {
          if (image.size < 1000000) {
              this.images.push('data:' + image.type + ';base64,' + image.base64)
              this.$store.commit('updateNewsItemImage', {id: this.data.id, image: this.image})
          }
      },
      onRemoveImage() {
          this.images = []
          this.$store.commit('updateNewsItemImage', {id: this.data.id, image: ''})
      }
    }
  }
</script>
