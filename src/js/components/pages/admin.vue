<template>
  <div id="admin" class="admin">
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
  import vPanel from '@/js/components/pages/admin/panel.vue'
  import vSignIn from '@/js/components/pages/admin/sign-in.vue'

  export default {
    components: {
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
