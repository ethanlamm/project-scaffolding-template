import { defineStore } from "pinia";
// 类型声明问件的应用
import type { CategoryList } from "@/types";
// 二次封装axios的使用
import http from "@/utils/request";

const useHomeStore = defineStore('home', {
    state: () => {
        return {
            msg: 'vue3-ts-pinia模板',
            categoryList: [] as CategoryList,
        }
    },
    actions: {
        async getAllCategory() {
            // 使用
            const res = await http<CategoryList>('get', '/home/category/head')
            this.categoryList = res.data.result
        }
    }
});


export default useHomeStore;
