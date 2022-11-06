import { defineStore } from "pinia";

const useHomeStore = defineStore('home', {
    state: () => {
        return {
            msg: 'vue3-js-pinia模板',
        }
    }
});

export default useHomeStore;
