import '@/scss/main.scss'
import '@/js/polyfills/main.js'
import Vue from 'vue'
import router from '@/js/router.js'
import vMain from '@/js/components/main.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VModal from 'vue-js-modal'
import {TweenMax, Power2, TimelineLite} from 'gsap'
import VueScrollTo from 'vue-scrollto'
import '@/js/ymaps.js'
import store from '@/js/store.js'
import VueCookie from 'vue-cookie'
import VueQuillEditor from 'vue-quill-editor'
//import './ymaps'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueAwesomeSwiper)
Vue.use(VModal)
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
 })
 Vue.use(VueCookie)
 Vue.use(VueQuillEditor)

const app = new Vue({
  components: {
    vMain
  },
  el: '#app',
  router,
  store,
  template: '<v-main />'
})
