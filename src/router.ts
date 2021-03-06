import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Drawings from './views/Drawings.vue';
import About from './views/About.vue';
import Login from './views/Login.vue';
import Admin from './views/Admin.vue';

import auth from '@/modules/core/auth';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/drawings',
            name: 'drawings',
            component: Drawings,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
            beforeEnter: (to, from, next) => {
                auth.checkAuth();
                const isLoggedIn = auth.user.authenticated;
                if (isLoggedIn) {
                    console.log('Granted');
                    next();
                } else {
                    console.log('Denied');
                    next(false);
                }
            },
        },
    ],
});
