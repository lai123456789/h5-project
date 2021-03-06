// let d = 'http://hndn7e.natappfree.cc'

// let d = 'http://192.168.7.200:8088'  //开发环境
let d = 'http://m.chengmall.cn'  //
// let d = 'http://test.chengmall.cn'  //生产环境

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', //打包到生产环境使用./
  devServer: {
    proxy: {
      // '/api': {
      //     target: 'http://testweixin.51vip.biz',
      //     changeOrigin: true
      // },
      // '/api': {
      //     target: 'http://192.168.7.155:8088',
      //     changeOrigin: true
      // },
      '/wx': {
        target: d,
        changeOrigin: true
      },
      '/api': {
        target: d,
        changeOrigin: true
      },
      '/common': {
        target: d,
        changeOrigin: true
      }
      // '/wx': {
      //     target: 'http://m.chengmall.cn',
      //     changeOrigin: true
      // },
      // '/api': {
      //     target: 'http://m.chengmall.cn',
      //     changeOrigin: true
      // },
      // '/common': {
      //     target: 'http://m.chengmall.cn',
      //     changeOrigin: true
      // }
    },
    disableHostCheck: true
  }
}
