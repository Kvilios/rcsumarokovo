<template>
  <div class="consultation">
    <div class="layout">
      <div class="consultation-wrapper">
        <div class="consultation-wrapper-column">
          <v-primary />
        </div>
        <div class="consultation-wrapper-column">
          <v-detox />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .consultation {
    &-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 -20px;

      &-column {
        padding: 0 20px;
        width: 50%;

        @include adopt(768px) {
          width: 100%;
        }
      }
    }
  }
</style>

<script>
  import vPrimary from '@/js/components/pages/home/consultation/primary.vue';
  import vDetox from '@/js/components/pages/home/consultation/detox.vue';

  export default {
    components: {
      vPrimary,
      vDetox
    }
  }
</script>
