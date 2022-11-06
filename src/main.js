import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// import store from './store'

// 统一浏览器样式
import 'normalize.css'
// 项目公用样式
import '@/assets/styles/common.less'

// 使用pinia
const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
