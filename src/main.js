import Vue from 'vue';
import VueMeta from 'vue-meta';
import Vue2Crumbs from 'vue-2-crumbs';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

Vue.config.productionTip = false;

Vue.use(Vue2Crumbs);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

Vue.use(VueMeta);
