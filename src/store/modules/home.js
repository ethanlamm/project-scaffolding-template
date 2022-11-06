import { defineStore } from "pinia";
import http from '@/utils/request'

const useHomeStore = defineStore('home', {
    state: () => {
        return {
            msg: 'vue3-js-pinia模板',
            categoryList: []
        }
    },
    actions: {
        async getAllCategory() {
            // 使用  默认get请求
            const res = await http('/home/category/head')
            this.categoryList = res.result
        }
    }
});

export default useHomeStore;
