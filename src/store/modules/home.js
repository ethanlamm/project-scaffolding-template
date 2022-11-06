import http from "@/utils/request"

export default {
    namespaced: true,

    state: {
        msg: 'vue2-js-vuex模板',
        categoryList: []
    },

    mutations: {
        GETAllCATEGORY(state, data) {
            state.categoryList = data
        }
    },

    actions: {
        async getAllCategory({ commit }) {
            // 使用  默认get请求
            const res = await http('/home/category/head')
            commit('GETAllCATEGORY', res.result)
        }
    }
}