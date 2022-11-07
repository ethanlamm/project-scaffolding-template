import axios from "axios";

// 在vite.config.js中启用代理，依据环境的不同使用不同的 BASE_API
// export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'

// 环境变量的获取
// vite：import.meta.env
// webpackage：process.env

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000
})

// 请求拦截
instance.interceptors.request.use(config => {
    // 拦截业务
    // const { profile } = store.state.user
    // if (profile.token) {
    //     config.headers.Authorization = `Bearer ${profile.token}`
    // }

    return config // 要返回 config
}, err => {
    return Promise.reject(err)
})

// 响应拦截
instance.interceptors.response.use(res => {
    // 对数据进行加工处理后返回
    return res.data
}, err => {
    // 401 状态码
    // if (err.response && err.response.status === 401) {
    //     // 1.清空无效信息
    //     // 2.跳转至登录页
    //     // 3.跳转传参(重定向)

    //     // 传入空对象
    //     store.commit('user/setUser', {})
    //     // 当前路由地址
    //     // encodeURIComponent 转换uri编码，防止解析地址出问题
    //     const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    //     router.push('/login?redirectUrl=' + fullPath)
    // }
    return Promise.reject(err)
})

// 请求工具函数
// 负责发请求：请求地址，请求方式，提交的数据
const http = (url, method = 'get', submitData) => {
    // return instance() ---> promise 对象
    return instance({
        url,
        method,
        // 1. 如果是get请求  需要使用params来传递submitData   ?a=10&c=10
        // 2. 如果不是get请求  需要使用data来传递submitData   请求体传参
        // [] 设置一个动态的key, 写js表达式，js表达式的执行结果当作KEY
        // method参数：get,Get,GET  转换成小写再来判断
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}
export default http