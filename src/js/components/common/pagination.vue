<template>
  <paginate
    :click-handler="clickHandler"
    :page-count="pagination.totalPages"
    v-if="pagination && pagination.totalPages > 1"
    v-model="pagination.currentPage"
    prev-text="<"
    next-text=">"
    container-class="pagination" />
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .pagination {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin-top: $margin;

    li {
      align-items: center;
      display: flex;
      font-size: em(16);
      height: $padding * 2;
      justify-content: center;
      margin-right: $margin / 4;
      width: $padding * 2;

      a:focus {
        outline: none;
      }

      &:last-child {
        margin-right: 0;
      }

      &.active {
        background-color: $accentColor;
        color: white;
      }

      &.disabled {
        opacity: .5;
        pointer-events: none;
      }
    }
  }
</style>

<script>
  import Paginate from 'vuejs-paginate';

  export default {
    components: {
      Paginate
    },
    methods: {
      clickHandler(page) {
        this.$emit('select', page);
      }
    },
    props: ['pagination']
  }
</script>
