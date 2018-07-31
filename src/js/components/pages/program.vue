<template>
  <div id="program" class="program">
    <v-phones />
    <div class="layout">
      <h2 class="program-title">
        Реабилитация по нашей программе состоит из 3 этапов:
      </h2>
      <div class="program-inside">
        <ul class="program-inside-list">
          <li class="program-inside-list-item" v-for="listItem in list">
            <h3 class="program-inside-list-item-title">
              {{ listItem.title }}
            </h3>
            <p class="program-inside-list-item-phrase">
              {{ listItem.phrase }}
            </p>
            <div class="program-inside-list-item-description" v-html="listItem.description"></div>
          </li>
        </ul>
        <ul class="program-inside-links-list">
          <li class="program-inside-links-list-item">
            <span>
              Основные принципы православной помощи наркозависимым сформулированы в Положении<br>
              <a class="animate" href="/files/Об-участии-РПЦ-в-реабилитации-наркозависимых.pdf" target="_blank"><span>«Об участии Русской Православной Церкви в реабилитации наркозависимых»</span> <span class="green">>>></span></a>
            </span>
          </li>
          <li class="program-inside-links-list-item">
            <span>
              Подробно ознакомиться с методологией программы реабилитации можно в книге<br>
              <a class="animate" href="/files/metodologia.pdf" target="_blank"><span>«Методология социальной реабилитации наркозависимых в церковной общине»</span> <span class="green">>>></span></a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .program {
    &-title {
      color: $blue;
      font-family: Calibri, sans-serif;
      font-weight: bold;
      font-size: em(24);
      margin-left: 278px;
      text-align: center;
    }

    &-inside {
      margin: 1em 0 0 278px;

      &-list {
        display: flex;
        justify-content: space-between;
        margin: 0 -20px;

        &-item {
          display: flex;
          flex-direction: column;
          padding-left: 20px;
          width: 33.3%;

          &:not(:last-child) {
            .program-inside-list-item-description {
              background: url('/img/pages/program/border.png') no-repeat 100% 0;
              padding-right: 21px;
            }
          }

          &-title {
            font-family: Garamond, serif;
            font-weight: bold;
            font-size: em(32);
            text-align: center;
          }

          &-phrase {
            color: $blue;
            font-family: Calibri, sans-serif;
            font-weight: bold;
            font-size: em(24);
            margin: 20px 0 40px;
            text-align: center;
          }

          &-description {
            flex-grow: 1;
            font-size: em(19);
          }
        }
      }

      &-links-list {
        &-item {
          align-items: flex-start;
          display: flex;
          font-size: em(19);
          margin-top: 20px;

          &:before {
            background-color: $green;
            border-radius: 50%;
            content: '';
            display: block;
            flex-shrink: 0;
            height: 10px;
            margin-right: 10px;
            position: relative;
            top: 9px;
            width: 10px;
          }

          a {
            span {
              color: $dark-text;
              text-decoration: underline;

              &.green {
                color: $green;
                text-decoration: none;
              }
            }

            &:hover {
              span:not(.green) {
                color: lighten($dark-text, 10%);
                text-decoration: none;
              }
            }
          }
        }
      }
    }
  }
</style>

<script>
  import vPhones from '@/js/components/common/phones.vue';

  export default {
    data() {
      return {
        title: 'Программа',
        list: [
          {
            title: '1 этап',
            phrase: 'Прийти в себя',
            description: 'Помогает изучить природу зависимости, преодолеть влечение к наркотику, изучить собственную историю употребления, выделить духовную составляющую своей жизни, выявить основные жизненные проблемы и перспективы, составить реальный взгляд на себя.'
          },
          {
            title: '2 этап',
            phrase: 'Прийти к Богу',
            description: 'Помогает изучить основы Церковного Бытия, понять смысл служения и послушания, использовать аскетические методы борьбы со страстями.'
          },
          {
            title: '3 этап',
            phrase: 'Прийти к людям',
            description: 'Помогает обрести социальные навыки, восстановить утраченные документы, организовать себе постреабилитационное сопровождение, трудоустроиться и выйти в социальную жизнь с минимальным риском.'
          }
        ]
      }
    },
    created() {
      document.title = this.title;
    },
    components: {
      vPhones
    }
  }
</script>
