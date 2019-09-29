export default [
    {
        path: '/',
        component: () => import(/* webpackChunkName: 'root' */ '@/views/index.vue')
    }
]
