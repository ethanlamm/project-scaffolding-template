import { defineStore } from "pinia";

// 定义 Store 时建议遵循命名规范 useXxxStore
const useAboutStore = defineStore('about', {
    state: () => {
        return {
            msg: '使用 create-vue 脚手架搭建'
        }
    }
});

// 默认导出
export default useAboutStore;
