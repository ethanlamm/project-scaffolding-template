import { defineConfig } from 'vite'
// 引入path
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
    port: 8080,
    proxy: {
      '/dev-api': {
        target: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev-api/, '')
      },
      '/prod-api': {
        target: 'https://example.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/prod-api/, '')
      }
    }
  },

  // src别名配置
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  // mixins.less、variables.less自动导入
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "@/assets/styles/mixins.less";
          @import "@/assets/styles/variables.less";
        `
      }
    }
  }
})
