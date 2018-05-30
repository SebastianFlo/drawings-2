import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

import router from './router';
import './registerServiceWorker';
import Auth from '@/modules/core/authentication/Auth';

Vue.use(VueResource);
Vue.config.productionTip = false;

export const Authentication = new Auth();

new Vue({
  router,
  http: {
    root: 'https://sebastian.party',
  },
  render: (h) => h(App),
}).$mount('#app');
