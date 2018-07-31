<template>
  <div id="main" class="main">
    <v-header v-if="!isAdmin" />
    <section class="main-scrollbar-inside-page">
      <transition name="fade-opacity" mode="out-in">
        <router-view />
      </transition>
    </section>
    <v-footer v-if="!isAdmin" />
  </div>
</template>

<style lang="scss">
  .main {

  }
</style>

<script>
  import vHeader from '@/js/components/layouts/header.vue';
  import vFooter from '@/js/components/layouts/footer.vue';

  export default {
    data() {
      return {

      }
    },
    components: {
      vHeader,
      vFooter
    },
    computed: {
      isAdmin() {
        return this.$route.name === 'admin';
      }
    }
  }
</script>
