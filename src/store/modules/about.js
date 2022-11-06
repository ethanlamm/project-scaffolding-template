import { defineStore } from "pinia";

const useAboutStore = defineStore('about', {
    state: () => {
        return {
            msg: '使用 vue-cli 脚手架搭建'
        }
    }
});

export default useAboutStore;
