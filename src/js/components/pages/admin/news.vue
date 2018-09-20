<template>
  <div class="news">
    <h2 class="news-title">
      Новости
    </h2>
    <button class="news-item-panel-buttons-delete" @click="createNewsItem">
      Создать!
    </button>
    <template v-if="data.list.length">
      <p class="news-number">
        Найдено записей: {{ data.list.length }}
      </p>
      <ul class="news-list">
        <v-news-item class="news-list-item" v-for="(item, i) in data.list" :key="'news-item-' + item.id" :data="item" />
      </ul>
    </template>
    <template v-else>
      <p class="news-empty">
        Записей не найдено!
      </p>
    </template>
  </div>
</template>

<style lang="scss" scoped>
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .news {
    background-color: $light;
    padding: 16px;

    &-title {

    }

    &-number {

    }

    &-list {
      margin: 0 auto;
      max-width: 1024px;
      padding: 16px;

      &-item {
        margin-bottom: 64px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    &-empty {

    }
  }
</style>

<script>
  import vNewsItem from '@/js/components/pages/admin/news-item.vue'

  export default {
    components: {
      vNewsItem
    },
    computed: {
      data() {
        return this.$store.getters.newsData
      }
    },
    created() {
      this.$store.dispatch('loadNews')
      document.title = this.data.title
    },
    methods: {
      save() {
        this.$store.dispatch('saveNews')
      },
      createNewsItem() {
          this.$store.commit('createNewsItem')
      }
    }
  }
</script>
