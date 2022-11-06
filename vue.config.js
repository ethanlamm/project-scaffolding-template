const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',   // 放置生成的静态资源 
  productionSourceMap: false,   // 生产环境的 source map
  devServer: {
    // 配置代理跨域
    proxy: {
      '/dev-api': {
        target: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/',
        pathRewrite: { "^/dev-api": "" }
      }
    }
  }
})
