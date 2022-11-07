import { makeAutoObservable } from "mobx"

class HomeStore {
    // 定义数据
    msg = 'react-js-mobx模板'

    constructor() {
        makeAutoObservable(this)
    }
}
export default HomeStore