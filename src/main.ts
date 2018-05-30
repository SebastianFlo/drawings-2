import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import Auth from '@/modules/core/authentication/Auth';

Vue.config.productionTip = false;

export const Authentication = new Auth();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
