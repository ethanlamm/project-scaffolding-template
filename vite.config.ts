import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
// 1. Jsx 插件，初始化项目的时候选择Jsx就会自动下载
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',  // 设置打包路径

  plugins: [
    vue(
      {
        // 响应性语法糖目前默认是关闭状态，需要你显式选择启用
        // reactivityTransform: true,
      }
    ),
    // 2. 应用 vueJsx 插件
    vueJsx()
  ],

  // 配置开发服务器
  server: {
    port: 8080,
    // cors:true,     // 允许开发时 ajax 跨域
    // open:true,     // 打开浏览器
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  // 配置 mixin.less、variables.less 自动导入
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "./src/assets/styles/mixin.less";
          @import "./src/assets/styles/variables.less";
        `
      }
    }
  }
})
