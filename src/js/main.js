import '@/scss/main.scss';
import '@/js/polyfills/main.js';
import Vue from 'vue';
import router from '@/js/router.js';
import vMain from '@/js/components/main.vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import VModal from 'vue-js-modal';
import {TweenMax, Power2, TimelineLite} from 'gsap';
import VueScrollTo from 'vue-scrollto';
import '@/js/ymaps.js';

Vue.use(VueAwesomeSwiper);
Vue.use(VModal);
Vue.use(VueScrollTo, {
     container: "body",
     duration: 2000,
     easing: "ease",
     offset: 0,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 });

const app = new Vue({
  components: {
    vMain
  },
  el: '#app',
  router,
  template: '<v-main />'
});
