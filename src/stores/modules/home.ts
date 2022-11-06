import { defineStore } from "pinia";

// 定义 Store 时建议遵循命名规范 useXxxStore
const useHomeStore = defineStore('home', {
    state: () => {
        return {
            msg: 'vue3-ts-pinia模板'
        }
    }
});

// 默认导出
export default useHomeStore;
