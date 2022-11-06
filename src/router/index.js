/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/Layout.vue";

const router = createRouter({
    history: createWebHistory(process.env.VUE_APP_BASE_API),
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
