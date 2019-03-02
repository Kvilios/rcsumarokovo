<template>
  <div class="news">
    <h2 class="news-title">
      Новости
    </h2>
    <button class="news-item-panel-buttons-create" @click="createNewsItem">
      Создать
    </button>
    <button class="news-item-panel-buttons-refresh" @click="refreshNews">
      Обновить
    </button>
    <template v-if="isLoading">
      <p class="news-loading">
        Загрузка, пожалуйста, подождите...
      </p>
    </template>
    <template v-else-if="data.list.length">
      <ul class="news-list">
        <v-news-item class="news-list-item" v-for="item in data.list" :key="'news-item-' + item.id" :data="item" />
      </ul>
    </template>
    <template v-else>
      <p class="news-empty">
        Записей не найдено!
      </p>
    </template>
    <v-pagination @select="selectHandler" :pagination="pagination" />
  </div>
</template>

<style lang="scss" scoped>
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .news {
    background-color: $light;
    padding: 16px;

    &-list {
      margin: 0 auto;
      max-width: 1024px;
      padding: 16px;

      &-item {
        margin: $margin * 2 0 0;

        width: 100%;
      }
    }

    &-loading {
      margin-top: 100px;
      text-align: center;
    }

    .pagination {
      justify-content: center;
    }
  }
</style>

<script>
  import vNewsItem from '@/js/components/pages/admin/news-item.vue';
  import vPagination from '@/js/components/common/pagination.vue';

  export default {
    components: {
      vNewsItem,
      vPagination
    },
    computed: {
      data() {
        return this.$store.getters.newsData
      }
    },
    created() {
      document.title = this.data.title;

      this.getNews();
    },
    data() {
      return {
        isLoading: false,
        pagination: {
            currentPage: 1,
            perPage: 5,
            totalPages: 1
        }
      }
    },
    methods: {
      save() {
        this.$store.dispatch('saveNews')
      },
      createNewsItem() {
          this.$store.commit('createNewsItem')
      },
      selectHandler(page) {
        this.getNews();
      },
      getNews() {
        this.isLoading = true;

        this.$store.dispatch('loadNews', this.pagination);
      },
      refreshNews() {
        this.getNews();
      }
    },
    watch: {
      data: {
            handler: function(val) {
              this.isLoading = false;

              this.pagination.totalPages = val.total;
            },
            deep: true
        }
    }
  }
</script>
