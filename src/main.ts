import 'wired-elements';
import Vue from 'vue';

import App from './App.vue';
import VueResource from 'vue-resource';

import router from './router';
import './registerServiceWorker';
import auth from '@/modules/core/auth';

Vue.use(VueResource);
Vue.config.productionTip = false;

auth.checkAuth();

new Vue({
  router,
  http: {
    root: 'https://sebastian.party',
    headers: {
        common: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        },
    },
  },
  render: (h) => h(App),
}).$mount('#app');
