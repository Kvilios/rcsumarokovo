<template>
  <div id="admin" class="admin">
    <v-sign-in @login="login" v-if="!isAuthorized" />
    <div class="layout" v-else>
      <router-link class="admin-home animate" to="/">На Главную</router-link>
      <div class="admin-inside">
        <v-news />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/_variables.scss';
  @import 'src/scss/_mixins.scss';

  .admin {
    &-home {
      border-bottom: 1px dashed $dark-text;

      &:hover {
        border-bottom: 1px dashed rgba(0, 0, 0, 0);
        color: lighten($dark-text, 10%);
      }
    }

    &-inside {
      font-size: em(16);
    }
  }
</style>

<script>
  import vSignIn from '@/js/components/pages/admin/sign-in.vue';
  import vNews from '@/js/components/pages/admin/news.vue';

  export default {
    data() {
      return {
        isAuthorized: false,
        title: 'Панель администратора'
      }
    },
    components: {
      vSignIn,
      vNews
    },
    created() {
      document.title = this.title;
    },
    methods: {
      login() {
        this.isAuthorized = true;
      }
    }
  }
</script>
