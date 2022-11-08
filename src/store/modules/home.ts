import { makeAutoObservable, runInAction } from "mobx"

import type { CategoryList } from "../../types";
import http from "../../utils/request"

class HomeStore {
    msg = 'react-ts-mobx模板'
    categoryList = [] as CategoryList

    constructor() {
        makeAutoObservable(this)
    }

    getAllCategory = async () => {
        const res = await http<CategoryList>('/home/category/head')
        // 使用this获取整个store实例
        runInAction(() => {
            this.categoryList = res.data.result
        })
    }

}
export default HomeStore