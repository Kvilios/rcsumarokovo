<template>
  <div class="socials">
      <ul class="socials-list">
        <li class="socials-list-item" v-for="listItem in list">
          <a :href="listItem.link" target="_blank" :title="listItem.name" v-html="listItem.icon"></a>
        </li>
        <!-- <li class="socials-list-item donate">
          <a class="animate" href="#" target="_blank" title="Пожертвовать" @click.prevent="showDonate">
            Пожертвовать
          </a>
        </li> -->
      </ul>
      <modal name="socials-donate">
        <div class="socials-donate-wrapper">
          <h2 class="socials-donate-wrapper-title">
            Пожертвовать
          </h2>
          <form method="POST" action="https://money.yandex.ru/quickpay/confirm.xml">
            <input type="hidden" name="receiver" value="41001272093945">
            <input type="hidden" name="formcomment" value="Проект «Железный человек»: реактор холодного ядерного синтеза">
            <input type="hidden" name="short-dest" value="Проект «Железный человек»: реактор холодного ядерного синтеза">
            <input type="hidden" name="label" value="$order_id">
            <input type="hidden" name="quickpay-form" value="donate">
            <input type="hidden" name="targets" value="транзакция {order_id}">
            <input type="hidden" name="sum" value="4568.25" data-type="number">
            <input type="hidden" name="comment" value="Хотелось бы получить дистанционное управление.">
            <input type="hidden" name="need-fio" value="true">
            <input type="hidden" name="need-email" value="true">
            <input type="hidden" name="need-phone" value="false">
            <input type="hidden" name="need-address" value="false">
            <label>
              <input type="radio" name="paymentType" value="PC">Яндекс.Деньгами
            </label>
            <label>
              <input type="radio" name="paymentType" value="AC" checked>Банковской картой
            </label>
            <input type="submit" value="Перевести">
          </form>
        </div>
      </modal>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .socials {
    &-list {
      align-items: center;
      display: flex;
      justify-content: space-between;
      width: 100px;

      &-item {
        &:hover {
          .icon {
            fill: lighten(rgba($dark, .6), 10%);
          }
        }

        a {
          align-items: center;
          display: flex;
          justify-content: center;

          svg {
            height: 16px;
            min-width: 16px;

            .icon {
              fill: rgba($dark, .6);
            }
          }
        }

        &.donate {
          font-size: em(12);

          a {
            color: $dark-text;

            &:hover {
              color: lighten($dark-text, 10%);
              text-decoration: underline;
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
          {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.51 16.25"><path class="icon animate" d="M5,4.09c0-.38,0-.85.21-1l2.28-.23V0c-.43,0-.94,0-1.38,0S5.18,0,4.73,0A3.44,3.44,0,0,0,2.68.77c-.73,1.17-1,.17-1,4.56H0V8.13H1.65a1.89,1.89,0,0,1,0,.48v7.63H5c0-2,0-4.07,0-6.09,0,0,0-1.95,0-2s0,0,0,0,2.11,0,2.18,0h0l.29-2.79H5C5,4.92,5,4.5,5,4.09Z"/></svg>',
            link: 'https://www.facebook.com/rcsumarokovo',
            name: 'Facebook'
          },
          {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.39 14.17"><path class="icon animate" d="M9.2,4.31V2.22a.46.46,0,0,0-.45-.53l-.12,0A.69.69,0,0,1,8.08.61a1.08,1.08,0,0,1,1-.59,3,3,0,0,1,.42,0c1,0,2.11,0,3.16,0a5.86,5.86,0,0,1,.93.09,1,1,0,0,1,.87,1.06c0,1.65,0,3.3,0,5a1.67,1.67,0,0,0,0,.32c0,.36.33.5.61.27A5.53,5.53,0,0,0,16,5.8a11.06,11.06,0,0,0,1.17-2.3c.34-.78.69-1.56,1-2.33a2.2,2.2,0,0,1,.15-.26.53.53,0,0,1,.55-.3h4.28a1.35,1.35,0,0,1,.63.14,1,1,0,0,1,.48,1.18,2.88,2.88,0,0,1-.48,1.19c-.49.66-1,1.32-1.5,2a19.89,19.89,0,0,0-1.78,2.5.47.47,0,0,0,.06.67c.9,1,1.81,2,2.7,3,.32.36.61.74.91,1.12a1.16,1.16,0,0,1-.85,1.74l-.75,0H19.38a1,1,0,0,1-.75-.27l-2.24-2.16c-.3-.29-.6-.59-.91-.87a.5.5,0,0,0-.89.22,6.51,6.51,0,0,0-.14,1c0,.39,0,.79-.1,1.19a1,1,0,0,1-.11.34.77.77,0,0,1-.81.55c-1.06,0-2.12,0-3.17-.05a1.67,1.67,0,0,1-.74-.22,9.92,9.92,0,0,1-3.21-2.58,47.81,47.81,0,0,1-4-5.14,31.06,31.06,0,0,1-2-3.51A5.33,5.33,0,0,1,0,1.8a1.23,1.23,0,0,1,.15-1A.4.4,0,0,1,.56.61H4.22a.74.74,0,0,1,.54.25,6.12,6.12,0,0,1,1,1.42,26.11,26.11,0,0,0,1.75,3c.3.42.62.83.92,1.25a.62.62,0,0,0,.52.26c.21,0,.28-.06.3-.28V4.31Z"/></svg>',
            link: 'https://vk.com/rcsumarokovo',
            name: 'ВКонтакте'
          },
          {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.25 16.25"><path class="icon animate" d="M11.74,16.25H4.51A4.51,4.51,0,0,1,0,11.74V4.51A4.51,4.51,0,0,1,4.51,0h7.23a4.51,4.51,0,0,1,4.51,4.51v7.23A4.51,4.51,0,0,1,11.74,16.25Zm-7.23-15A3.23,3.23,0,0,0,1.28,4.51v7.23A3.23,3.23,0,0,0,4.51,15h7.23A3.23,3.23,0,0,0,15,11.74V4.51a3.23,3.23,0,0,0-3.23-3.23Z"/><path class="icon" d="M8.13,12.33a4.21,4.21,0,1,1,4.2-4.2A4.21,4.21,0,0,1,8.13,12.33Zm0-7.13a2.93,2.93,0,1,0,2.92,2.93A2.93,2.93,0,0,0,8.13,5.2Z"/><circle class="icon" cx="12.47" cy="3.37" r="1.19"/></svg>',
            link: 'https://www.instagram.com/bf.p.gennadiyakil/',
            name: 'Instagram'
          }
        ]
      }
    },
    methods: {
      showDonate() {
        this.$modal.show('socials-donate');
      },
      hideDonate() {
        this.$modal.hide('socials-donate');
      }
    }
  }
</script>
