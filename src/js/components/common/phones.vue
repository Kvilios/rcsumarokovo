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
        <li class="phones-list-item">
          +7 (910) 953 67 77
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

    &-list {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-left: 262px;
      padding-left: 16px;

      &-item {
        color: white;
        font-family: Garamond, serif;
        font-size: em(32);
        font-weight: bold;

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
