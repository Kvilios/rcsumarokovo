<template>
    <div class="panel">
        <div class="panel-header">
          <h1 class="panel-header-title">
              Здравствуйте, {{ data.userData.name }}!
          </h1>
          <button class="panel-header-sign-out" @click="logout">
              Выйти
          </button>
        </div>
        <router-link class="panel-home animate" to="/">
            На главную
        </router-link>
        <div class="panel-content">
            <v-news />
        </div>
    </div>
</template>

<style lang="scss">
  @import '~@/scss/_variables.scss';
  @import '~@/scss/_mixins.scss';

  .panel {
    
  }
</style>

<script>
  import vNews from '@/js/components/pages/admin/news.vue'

  export default {
    components: {
      vNews
    },
    created() {
      document.title = this.data.title
    },
    computed: {
      data() {
        return this.$store.getters.adminData
      }
    },
    methods: {
      logout() {
        this.$cookie.delete('adminToken')
        this.$store.commit('updateAdminUserData', {})
      }
    }
  }
</script>
