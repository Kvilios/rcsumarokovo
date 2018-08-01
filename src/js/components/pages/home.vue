<template>
  <div id="home" class="home">
    <div class="adopt920">
        <v-menu />
    </div>
    <v-banner />
    <div class="adopt480">
        <v-adopt-callback />
    </div>
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
  import vMenu from '@/js/components/pages/home/menu.vue';
  import vBanner from '@/js/components/pages/home/banner.vue';
  import vAdoptCallback from '@/js/components/pages/home/adopt/callback.vue';
  import vTabs from '@/js/components/pages/home/tabs.vue';
  import vConsultation from '@/js/components/pages/home/consultation.vue';
  import vSumarokovo from '@/js/components/pages/home/sumarokovo.vue';
  import vApartment from '@/js/components/pages/home/apartment.vue';
  import vCallback from '@/js/components/pages/home/callback.vue';

  export default {
    data() {
      return {
        title: 'Помощь зависимым и их близким, церковная алко- и наркореабилитация'
      }
    },
    components: {
      vMenu,
      vBanner,
      vAdoptCallback,
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
