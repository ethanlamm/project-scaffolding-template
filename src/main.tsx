import ReactDOM from 'react-dom/client'
import App from './App'
// 包裹最外层
import { BrowserRouter } from "react-router-dom";

// 统一浏览器样式
import 'normalize.css'
// 项目公用样式
import '@/assets/styles/common.less'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
