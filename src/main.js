import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 统一浏览器样式
import 'normalize.css'
// 项目公用样式
import '@/assets/styles/common.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
