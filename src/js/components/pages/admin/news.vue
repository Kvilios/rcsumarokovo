<template>
  <div class="news">
    <h1 class="news-title">
      Новости
    </h1>
    <p>
      Найдено записей: {{ list.length }}
    </p>
    <table>
      <thead>
        <tr>
          <th>
            №
          </th>
          <th>
            Изображение (url)
          </th>
          <th>
            Заголовок
          </th>
          <th>
            Короткий текст (html)
          </th>
          <th>
            Полный текст (html)
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            #
          </td>
          <td>
              <input type="text" v-model="formData.image" placeholder="Введите текст...">
          </td>
          <td>
            <textarea v-model="formData.title" placeholder="Введите текст..." required></textarea>
          </td>
          <td>
            <textarea v-model="formData.short" placeholder="Введите текст..." required></textarea>
          </td>
          <td>
            <textarea v-model="formData.full" placeholder="Введите текст..."></textarea>
          </td>
          <td>
            <button @click="create">
              Создать
            </button>
          </td>
        </tr>
        <tr v-for="listItem in list" :class="{'removed': listItem.removed}">
          <td>
            {{ listItem.id }}
          </td>
          <td class="news-image">
            <template v-if="id == listItem.id">
              <input type="text" v-model="listItem.image" placeholder="Введите текст...">
            </template>
            <template v-else>
              <img :src="listItem.image" alt="">
            </template>
          </td>
          <td>
            <template v-if="id == listItem.id">
              <textarea v-model="listItem.title" placeholder="Введите текст..." required></textarea>
            </template>
            <template v-else>
              {{ listItem.title }}
            </template>
          </td>
          <td>
            <template v-if="id == listItem.id">
              <textarea v-model="listItem.short" placeholder="Введите текст..." required></textarea>
            </template>
            <template v-else>
              {{ listItem.short }}
            </template>
          </td>
          <td>
            <template v-if="id == listItem.id">
              <textarea v-model="listItem.full" placeholder="Введите текст..."></textarea>
            </template>
            <template v-else>
              {{ listItem.full }}
            </template>
          </td>
          <td>
            <template v-if="id == listItem.id">
              <button @click="cancel(listItem)">
                Отмена
              </button>
              <button @click="save(listItem)">
                Сохранить
              </button>
            </template>
            <template v-else>
              <button @click="edit(listItem)">
                Редактировать
              </button><br>
              <button @click="remove(listItem)">
                Удалить
              </button>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .news {
    &-title {
      font-size: em(32);
      margin: 10px 0;
    }

    p {
      margin-bottom: 5px;
    }

    table {
      border-collapse: collapse;
      width: 100%;

      tr {
        th {
          border: 1px solid black;
          padding: 5px;
        }

        td {
          border: 1px solid black;
          padding: 5px;

          input {
            width: 100%;
          }

          textarea {

            min-height: 6em;
            resize: none;
            width: 100%;
          }
        }

        &.removed {
          display: none;
        }
      }
    }

    &-image {
      img {
        max-width: 100px;
      }
    }
  }
</style>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        temp: {},
        id: 0,
        list: [],
        formData: {
          image: '',
          title: '',
          short: '',
          full: ''
        }
      }
    },
    methods: {
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
      },
      create() {
        if (this.formData.title && this.formData.short) {
          let then = this;
          axios.post('/actions/create_news.php', then.formData)
          .then(function (response) {
            let listItem = Object.assign({}, then.formData);
            then.list.push(listItem);
            then.formData.image = '';
            then.formData.title = '';
            then.formData.short = '';
            then.formData.full = '';
            alert('Успешно создано!');
          })
          .catch(function (error) {
            alert('Произошла ошибка!');
            console.log(error);
          });
        }
        else alert('Обязательные поля не были заполнены!');
      },
      edit(listItem) {
        this.temp = Object.assign({}, listItem);
        this.id = listItem.id;
      },
      cancel(listItem) {
        listItem = this.temp;
        this.id = 0;
      },
      save(listItem) {
        if (listItem.title && listItem.short) {
          let then = this;
          axios.post('/actions/save_news.php', listItem)
          .then(function (response) {
            then.id = 0;
            alert('Успешно сохранено!');
          })
          .catch(function (error) {
            alert('Произошла ошибка!');
            console.log(error);
          });
        }
        else alert('Обязательные поля не были заполнены!');
      },
      remove(listItem) {
        let then = this;
        axios.post('/actions/remove_news.php', listItem)
        .then(function (response) {
          listItem.removed = true;
          alert('Успешно удалено!');
        })
        .catch(function (error) {
          alert('Произошла ошибка!');
          console.log(error);
        });
      }
    },
    created() {
      this.getNews();
    }
  }
</script>
