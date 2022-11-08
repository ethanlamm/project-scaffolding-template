import { defineConfig } from 'vite'
// 引入path
// 需要 npm install @types/node --save-dev
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // 公共基础路径，默认'/'，一般不需要改动
  base: '/',

  // 服务器配置
  server: {
    // 原端口号 5173
    port: 8080
  },

  // src别名配置
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
