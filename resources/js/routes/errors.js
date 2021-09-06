export default [
    {
        path: '/404',
        component: () => import('../js/components/errors/404'),
        name: 'NotFound'
    },
    {
        path: '*',
        redirect: '/404'
    },
]