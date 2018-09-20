<template>
  <div class="sign-in">
    <h1 class="sign-in-title">
      Вход в панель администратора
    </h1>
    <form class="sign-in-form" @submit.prevent="login">
      <input class="sign-in-form-email" type="email" v-model="data.formData.email" placeholder="Адрес электронной почты" required>
      <input class="sign-in-form-password" type="password" v-model="data.formData.password" placeholder="Пароль" required>
      <button class="sign-in-form-submit" type="submit">
        Войти
      </button>
      <input id="remember" class="sign-in-form-remember" type="checkbox" v-model="data.formData.remember">
      <label class="sign-in-form-remember" for="remember">
        Запомнить на <input class="sign-in-form-remember-days" type="number" v-model="data.formData.days" min="1" max="7"> {{ declOfNum(data.formData.days, ['день', 'дня', 'дней']) }}
      </label>
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
        &[type=email],
        &[type=password] {
          border: 1px solid gray;
          color: $dark-text;
          font-family: Calibri, sans-serif;
          font-size: em(16);
          height: 40px;
          margin-bottom: 10px;
          padding: 0 10px;
          width: 320px;
        }

        &[type=checkbox] {
          display: none;

          &:checked {
            + label {
              &::before {
                background: url('/img/pages/admin/tick-sign.svg') no-repeat center / 75%;
              }
            }
          }

          + label {
            align-items: center;
            display: flex;

            &::before {
              border: 1px solid gray;
              content: '';
              display: block;
              height: 20px;
              margin-right: 10px;
              width: 20px;
            }

            input {
              &[type=number] {
                color: $dark-text;
                font-family: Calibri, sans-serif;
                font-size: em(16);
                height: 40px;
                padding: 0 10px;
              }
            }
          }
        }
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
  import axios from 'axios'

  export default {
    data() {
      return {
        adminToken: ''
      }
    },
    created() {
      this.adminToken = this.$cookie.get('adminToken')
      if (this.adminToken) this.login()
    },
    computed: {
      data() {
        return this.$store.getters.adminData
      }
    },
    methods: {
      login() {
        axios.post('/actions/login.php', this.adminToken ? {token: this.adminToken} : this.data.formData)
        .then(response => {
          if (response.data === 'error') {
            this.$cookie.delete('adminToken')
            alert('Произошла ошибка!')
            console.log('Код ошибки: 2')
          }
          else if (Object.keys(response.data).length === 0) {
            this.$cookie.delete('adminToken')
            alert('Пользователь не найден (или, возможно, данные введены неверно)!')
            console.log('Код ошибки: 3')
          }
          else {
            if (this.data.formData.remember) this.$cookie.set('adminToken', response.data.token, {expires: this.data.formData.days + 'D'})
            this.$store.commit('updateAdminUserData', response.data)
          }
          this.$store.commit('clearAdminFormData')
        })
        .catch(error => {
          this.$cookie.delete('adminToken')
          this.$store.commit('clearAdminFormData')
          alert('Произошла ошибка!')
          console.log('Код ошибки: 1')
        })
      },
      declOfNum(n, titles) {
        return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2]
      }
    }
  }
</script>
