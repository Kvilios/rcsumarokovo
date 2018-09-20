<template>
  <div class="primary">
    <div class="primary-title">
      <div class="primary-title-icon">
        <img src="/img/pages/home/consultation/primary/icon.png" alt="">
      </div>
      <h2 class="primary-title-name">
        Первичная консультация
      </h2>
    </div>
    <div class="primary-body">
      <div class="primary-body-column">
        <p class="title">
          Проинформирует о:
        </p>
        <ul>
          <li>
            программе реабилитации,
          </li>
          <li>
            условиях поступления,
          </li>
          <li>
            расходах воспитанника в месяц.
          </li>
        </ul>
        <p class="important">
          Бесплатно
        </p>
        <p class="title">
          Родственникам поможет:
        </p>
        <ul>
          <li>
            понять характер заболевания,
          </li>
          <li>
            выработать грамотную модель поведения,
          </li>
          <li>
            научиться вести продуктивный диалог<br>с зависимым.
          </li>
        </ul>
      </div>
      <div class="primary-body-column">
        <p class="title">
          Зависимому даст:
        </p>
        <ul>
          <li>
            знание о проблеме зависимости,
          </li>
          <li>
            возможность начать свое выздоровление,
          </li>
          <li>
            подтверждение принятых решений<br>об изменениях<br>в жизни,
          </li>
          <li>
            мотивацию к началу выздоровления.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .primary {
    &-title {
      align-items: center;
      display: flex;
      font-family: Garamond, serif;
      font-size: 2em;
      height: 170px;
      justify-content: center;
      line-height: 45px;

      &-icon {
        height: 83px;
        margin-right: 40px;

        img {
          height: 100%;
        }
      }

      &-name {
        text-align: center;
      }
    }

    &-body {
      background: url('/img/pages/home/consultation/primary/border.png') repeat-y right 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 -20px 0 -10px;

      &-column {
        padding: 0 10px;
        width: 50%;

        p {
          margin-top: 20px;

          &:first-of-type {
            margin-top: 0;
          }

          &.title {
            color: $blue;
            font-weight: bold;
          }

          &.important {
            color: $orange;
            font-weight: bold;
            margin-left: 30px;
            text-transform: uppercase;
          }
        }

        ul {
          li {
            align-items: flex-start;
            display: flex;
            margin-top: 20px;

            &:before {
              background-color: $green;
              border-radius: 50%;
              content: '';
              display: block;
              flex-shrink: 0;
              height: 10px;
              margin-right: 20px;
              position: relative;
              top: 12px;
              width: 10px;
            }
          }
        }
      }
    }
  }
</style>

<script>

  export default {

  }
</script>
