import Vue from 'vue';
import VueMeta from 'vue-meta';
import Vue2Crumbs from 'vue-2-crumbs';
import App from './App.vue';
import router from './router/index';
import store from './services/store';

Vue.config.productionTip = false;

Vue.use(Vue2Crumbs);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

Vue.use(VueMeta);
