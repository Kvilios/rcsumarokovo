<template>
  <div id="admin" class="admin">
    <v-features v-if="isAuthorized" date="03-31-2019 23:59:59">
      <p>
        + Добавлены страницы для новостей (видны в конце списка новостей). Теперь новости загружаются по 10 шт. (в панели администратора по 5 шт.). Раньше загрузка была разовой (загружались все новости сразу), но т.к. новостей стало много, это начало давать большую нагрузку на базу данных и сервер. А также загрузка занимала длительное время.
      </p>
    </v-features>
    <v-panel v-if="isAuthorized" />
    <v-sign-in v-else />
  </div>
</template>

<style lang="scss">
  @import '~@/scss/_variables.scss';
  @import '~@/scss/_mixins.scss';

  .admin {
    
  }
</style>

<script>
  import vFeatures from '@/js/components/pages/admin/features.vue'
  import vPanel from '@/js/components/pages/admin/panel.vue'
  import vSignIn from '@/js/components/pages/admin/sign-in.vue'

  export default {
    components: {
      vFeatures,
      vPanel,
      vSignIn
    },
    created() {
      document.title = this.data.title
    },
    computed: {
      data() {
        return this.$store.getters.adminData
      },
      isAuthorized() {
        return Object.keys(this.data.userData).length
      }
    }
  }
</script>
