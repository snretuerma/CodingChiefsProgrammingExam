import Vue from 'vue';
import VueRouter from 'vue-router';
// import errors from './errors';
// import guest from './guest';
// import auth from './auth';

Vue.use(VueRouter)

const routes = [
    {
        path: '/404',
        component: () => import('../components/errors/404'),
        name: 'NotFound'
    },
    {
        path: '*',
        redirect: '/404'
    },
    {
        path: '/',
        component: () => import('../components/containers/AppContainer'),
        children: [
            {
                path: '',
                component: () => import('../components/containers/GuestContainer'),
                // meta: { isGuest: true },
                children: [
                    {
                        path: '',
                        component: () => import('../components/pages/guest/Login'),
                        name: 'Login'
                    }
                ]
            },
            {
                path: '',
                component: () => import('../components/containers/AuthContainer'),
                // meta: { isAuth: true },
                children: [
                    
                ]
            }
        ],
    }
];

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
});

export default router;