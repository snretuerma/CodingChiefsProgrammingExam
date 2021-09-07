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
                meta: { isGuest: true },
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
                meta: { isAuth: true },
                children: [
                    {
                        path: 'items',
                        component: () => import('../components/pages/auth/ItemPage'),
                        name: 'Items'
                    },
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

function sessionAlive() {
    try {
        if(JSON.parse(localStorage.getItem('vuex')).auth.authenticated) {
            return true;
        }
        return false;
    } catch (e) {
        return false;
    }

};

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.isAuth)) {
        if (!sessionAlive()) {
            next({ name: 'Login' });
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.isGuest)) {
        if (sessionAlive()) {
            next({ name: 'Items' });
        } else {
            next()
        }
    } else {
        next()
    }
});

export default router;