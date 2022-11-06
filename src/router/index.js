/* eslint-disable */
import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/views/Layout.vue";

const router = createRouter({
    // 开发时使用hash模式，解决刷新404问题
    history: createWebHashHistory(process.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "layout",
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
                },
            ]
        },

    ],
});

export default router;
