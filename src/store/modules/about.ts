import { makeAutoObservable } from "mobx"

class AboutStore {
    msg = '使用 vite 脚手架搭建'

    constructor() {
        makeAutoObservable(this)
    }
}
export default AboutStore