import Vue from 'vue';
import VueRouter from 'vue-router';
import vHome from '@/js/components/pages/home.vue';
import vAbout from '@/js/components/pages/about.vue';
import vProgram from '@/js/components/pages/program.vue';
import vNews from '@/js/components/pages/news.vue';
import vConditions from '@/js/components/pages/conditions.vue';
import vContacts from '@/js/components/pages/contacts.vue';
import vAdmin from '@/js/components/pages/admin.vue';

Vue.use(VueRouter);

const routes = [
  {
    component: vHome,
    name: 'home',
    path: '/'
  },
  {
    component: vAbout,
    name: 'about',
    path: '/about'
  },
  {
    component: vProgram,
    name: 'program',
    path: '/program'
  },
  {
    component: vNews,
    name: 'news',
    path: '/news'
  },
  {
    component: vConditions,
    name: 'conditions',
    path: '/conditions'
  },
  {
    component: vContacts,
    name: 'contacts',
    path: '/contacts'
  },
  {
    component: vAdmin,
    name: 'admin',
    path: '/admin'
  }
];

const router = new VueRouter(
  {
    mode: 'history',
    routes
  }
);

export default router;
