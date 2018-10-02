<template>
  <div class="phones">
    <div class="layout">
      <ul class="phones-list">
        <li class="phones-list-item">
          Звони! Поможем!
        </li>
        <li class="phones-list-item">
          +7 (915) 901 27 77
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .phones {
    align-items: center;
    background-color: $accentColor;
    display: flex;
    height: 50px;
    margin-bottom: 40px;

    @include adopt(920px) {
        background-color: rgba(0, 0, 0, 0);
        height: auto;
        margin: $margin 0 40px;
    }

    @include adopt(768px) {
        margin-top: 40px;
    }

    &-list {
      align-items: center;
      display: flex;
      justify-content: center;
      margin-left: 262px;
      padding-left: 16px;

      @include adopt(920px) {
        flex-direction: column;
        margin-left: 0;
      }

      &-item {
        color: white;
        font-family: Garamond, serif;
        font-size: em(32);
        font-weight: bold;
        margin: 0 4px;

        @include adopt(920px) {
          color: $dark-text;
        }

        &:first-of-type {
          font-size: em(40);
        }
      }
    }
  }
</style>

<script>
  export default {

  }
</script>
