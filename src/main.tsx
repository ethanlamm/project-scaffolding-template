import ReactDOM from 'react-dom/client'
import App from './App'

// 统一浏览器样式
import 'normalize.css'
// 项目公用样式
import '@/assets/styles/common.less'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
