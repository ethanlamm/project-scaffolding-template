import { defineStore } from "pinia";
// 类型声明问件的应用
import type { CategoryList } from "@/types";

const useHomeStore = defineStore('home', {
    state: () => {
        return {
            msg: 'vue3-ts-pinia模板',
            categoryList: [] as CategoryList,
        }
    }
});


export default useHomeStore;
