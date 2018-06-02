import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

import router from './router';
import './registerServiceWorker';

// import Auth from '@/modules/core/authentication/Auth';

Vue.use(VueResource);
Vue.config.productionTip = false;

// export const Authentication = new Auth();

// Check the user's auth status when the app starts
// Authentication.checkAuth();

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
