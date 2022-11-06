import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/Layout.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: "/",
                name: "home",
                component: () => import("@/views/home/index.vue"),
            },
            {
                path: "/about",
                name: "about",
                component: () => import("@/views/about/index.vue"),
            }
        ]
    }
]




const router = new VueRouter({
    mode: 'hash',		// 默认是hash模式
    routes,
    // scrollBehavior(to, from, savedPosition) {
    //     return { y: 0 }
    // }
})
export default router