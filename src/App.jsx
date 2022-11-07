import router from '@/router'
// RouterProvider：作为一个组件渲染，并传入由 createBrowserRouter 创建的路由实例给 router 属性
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
