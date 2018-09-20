<template>
  <div class="detox">
    <div class="detox-title">
      <div class="detox-title-icon">
        <img src="/img/pages/home/consultation/detox/icon.png" alt="">
      </div>
      <h2 class="detox-title-name">
        Детокс
      </h2>
    </div>
    <div class="detox-body">
      <p>
        Детоксикация – происходит на базе ОГБУЗ КОНД «Костромской областной наркологический диспансер» (круглосуточный) с которым заключен договор о сотрудничестве.
      </p>
      <ul>
        <li>
          Квалифицированный мед персонал.
        </li>
        <li>
          Стационарно.
        </li>
        <li>
          14-28 дней.
        </li>
        <li>
          Психологические консультации.
        </li>
        <li>
          Ежедневная мотивация.
        </li>
      </ul>
      <a class="animate" href="http://www.kond.dzo-kostroma.ru/" target="_blank">
        www.kond.dzo-kostroma.ru
      </a>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .detox {
    &-title {
      align-items: center;
      display: flex;
      font-family: Garamond, serif;
      font-size: 2em;
      height: 170px;
      justify-content: center;
      line-height: 45px;
      padding: 16px 0;

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

      a {
        color: $blue;
        display: block;
        font-weight: bold;
        margin: 40px 0 0 30px;

        &:hover {
          color: lighten($blue, 10%);
        }
      }
    }
  }
</style>

<script>

  export default {

  }
</script>
