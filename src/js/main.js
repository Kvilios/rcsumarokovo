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
import store from '@/js/store.js'
import VueCookie from 'vue-cookie'
import VueQuillEditor from 'vue-quill-editor'
import YmapPlugin from 'vue-yandex-maps'

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
 Vue.use(YmapPlugin, { // you may define your apiKey, lang and version or skip this.
     apiKey: '3e2baf54-f5e7-46f8-9843-5a348082b1dc', // '' by default
     lang: 'ru_RU', // 'ru_RU' by default
     version: '2.1' // '2.1' by default
 })

const app = new Vue({
  components: {
    vMain
  },
  el: '#app',
  router,
  store,
  template: '<v-main />'
})
