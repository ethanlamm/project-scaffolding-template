import { makeAutoObservable } from "mobx"


class HomeStore {
    msg = 'react-ts-mobx模板'

    constructor() {
        makeAutoObservable(this)
    }

}
export default HomeStore