const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: './',
  outputDir: 'dist',
  // 放置生成的静态资源 
  assetsDir: 'static',
  // 生产环境的 source map
  productionSourceMap: false,
})
