import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'

// 统一浏览器样式
import 'normalize.css'
// 项目公用样式
import '@/assets/styles/common.less'

createApp(App).use(store).mount('#app')
