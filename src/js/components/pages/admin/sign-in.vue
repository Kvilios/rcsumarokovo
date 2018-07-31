<template>
  <div class="sign-in">
    <h1 class="sign-in-title">
      Вход в панель администратора
    </h1>
    <form class="sign-in-form" @submit.prevent="login">
      <input type="text" v-model="formData.name" placeholder="Имя пользователя" required>
      <input type="password" v-model="formData.password" placeholder="Пароль" required>
      <button>
        Войти
      </button>
    </form>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .sign-in {
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;

    &-title {
      color: $dark-text;
      font-family: Calibri, sans-serif;
      font-size: em(32);
      margin-bottom: 20px;
    }

    &-form {
      display: flex;
      flex-direction: column;
      max-width: 320px;

      input {
        color: $dark-text;
        font-family: Calibri, sans-serif;
        font-size: em(16);
        height: 40px;
        margin-bottom: 10px;
        padding: 0 10px;
        width: 320px;
      }

      button {
        color: $dark-text;
        cursor: pointer;
        font-family: Calibri, sans-serif;
        font-size: em(16);
        height: 40px;
        margin: 10px auto 0;
        width: 160px;
      }
    }
  }
</style>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        formData: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        let then = this;
        axios.post('/actions/login.php', this.formData)
        .then(function (response) {
          then.formData.name = '';
          then.formData.password = '';
          if (response.data == 'correct') then.$emit('login');
          else alert('Неверный логин/пароль!');
        })
        .catch(function (error) {
          alert('Произошла ошибка!');
          console.log(error);
        });
      }
    }
  }
</script>
