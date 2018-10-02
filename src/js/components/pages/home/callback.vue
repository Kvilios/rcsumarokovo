<template>
  <div class="callback">
    <div class="layout">
      <h2 class="callback-title">
        Остались вопросы?
      </h2>
      <form class="callback-form" @submit.prevent="sendForm">
        <input type="text" v-model="formData.name" placeholder="Ваше имя" required>
        <masked-input type="tel" v-model="formData.phone" placeholder="Ваш телефон" mask="\+\7 (111) 111-11-11" required />
        <button type="submit animate">
          Получить консультацию
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .callback {
    background-color: $light;
    box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, .125);
    padding: 30px 0;

    &-title {
      font-size: 2em;
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
        font-size: 2em;
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
        }
      }
    },
    components: {
      MaskedInput
    },
    methods: {
      sendForm() {
        this.formData.name = this.formData.name.replace(/\s\s+/g, ' ');
        if (this.formData.name.length > 1 && this.formData.phone.length == 18) {
          let then = this;
          axios.post('/actions/mail.php', this.formData)
          .then(function (response) {
            alert('Сообщение отправлено!');
            then.formData.name = '';
            then.formData.phone = '';
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
