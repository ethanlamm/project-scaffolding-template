import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'


// 统一不同浏览器标签默认样式
import 'normalize.css'
// 按项目要求，提供项目的公用样式
import '@/assets/styles/common.less'

import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
