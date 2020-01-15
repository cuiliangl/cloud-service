const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  devServer: {
    open: true
  },
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        'assets': resolve('src/assets'),
        'views': resolve('src/views'),
        'components': resolve('src/components')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import 'assets/style/mixins.scss';`
      }
    }
  },
  assetsDir: 'static',
  publicPath: process.env.NODE_ENV === 'development'
    ? '/'
    : './'
}
