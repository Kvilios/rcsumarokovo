<template>
  <div id="home" class="home">
    <v-banner />
    <v-tabs />
    <v-consultation />
    <v-sumarokovo />
    <v-apartment />
    <v-callback />
  </div>
</template>

<style lang="scss">
  .home {

  }
</style>

<script>
  import vBanner from '@/js/components/pages/home/banner.vue';
  import vTabs from '@/js/components/pages/home/tabs.vue';
  import vConsultation from '@/js/components/pages/home/consultation.vue';
  import vSumarokovo from '@/js/components/pages/home/sumarokovo.vue';
  import vApartment from '@/js/components/pages/home/apartment.vue';
  import vCallback from '@/js/components/pages/home/callback.vue';

  export default {
    data() {
      return {
        title: 'Главная'
      }
    },
    components: {
      vBanner,
      vTabs,
      vConsultation,
      vSumarokovo,
      vApartment,
      vCallback
    },
    created() {
      document.title = this.title;
    }
  }
</script>
