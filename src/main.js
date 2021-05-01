import Vue from 'vue';
import VueMeta from 'vue-meta';
import App from './App.vue';
import router from './router/index';
import store from './services/store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

Vue.use(VueMeta);
