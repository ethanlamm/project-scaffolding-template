const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: './',
  outputDir: 'dist',

  // 放置生成的静态资源
  assetsDir: 'static',

  // 生产环境的 source map
  productionSourceMap: false,

  // less自动导入：http://zhoushugang.gitee.io/erabbit-client-pc-document/guide/03-home.html#_02-%E9%A6%96%E9%A1%B5-less%E7%9A%84%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BC%E5%85%A5

  // 注意：vue add style-resources-loader 要关闭vpn！！！！！
  // 配置完毕要重新启动！！！！
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  }
})
