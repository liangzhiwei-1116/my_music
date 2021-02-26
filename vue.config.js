// const jsdom = require('jsdom')
// const { JSDOM } = jsdom
module.exports = {
  publicPath: './',
  devServer: {
    host: '192.168.31.217',
    disableHostCheck: true,
    hot: true
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        }
      ]
    }
  }
  // 以下代码会在安装 vue-cli-plugin-prerender-spa 预渲染插件之后自动添加
  // 使用预渲染解决SPA应用SEO问题
  // pluginOptions: {
  //   prerenderSpa: {
  //     registry: undefined,
  //     renderRoutes: [
  //       '/',
  //       '/recommend',
  //       '/singer',
  //       '/rank',
  //       '/search',
  //       '/account',
  //       '/detail'
  //     ],
  //     useRenderEvent: true,
  //     headless: true,
  //     onlyProduction: true,
  //     postProcess: route => {
  //       // 将预渲染后的带有错误像素比的meta标签删除
  //       const reg = /<meta name="viewport".*user-scalable=no">/gi
  //       const res = route.html.match(reg)
  //       route.html = route.html.replace(res[1], '')
  //
  //       // 将预渲染后的重复loading标签删除
  //       // 根据字符串创建一个网页
  //       const html = new JSDOM(route.html)
  //       // 从该网页中拿到document对象
  //       const dom = html.window.document
  //       // 从dom中找到该节点将其删除
  //       const loadingEl = dom.querySelector('.container')
  //       dom.body.removeChild(loadingEl)
  //       // 删除之后将其还原
  //       route.html = html.serialize()
  //
  //       return route
  //     }
  //   }
  // }
}
