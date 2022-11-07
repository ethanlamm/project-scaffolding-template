import { makeAutoObservable } from "mobx"

import http from "@/utils/request"

class HomeStore {
    // 定义数据
    msg = 'react-js-mobx模板'
    categoryList = []

    constructor() {
        makeAutoObservable(this)
    }

    getAllCategory = async () => {
        const res = await http('/home/category/head')
        // 使用this获取整个store实例
        this.categoryList = res.result
    }
}
export default HomeStore