import 'wired-elements';
import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

import './registerServiceWorker';

import App from './App.vue';
import router from './router';

import auth from '@/modules/core/auth';
import storeConfig from '@/data/store.config';

Vue.use(VueResource);
Vue.use(Vuex);

Vue.config.productionTip = false;
auth.checkAuth();

const store = new Vuex.Store(storeConfig);

new Vue({
  router,
  store,
  http: {
    root: 'https://sebastian.party',
    headers: {
        common: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        },
    },
  },
  components: {
      Navigation,
  },
  render: (h) => h(App),
}).$mount('#app');
