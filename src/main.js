import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import './assets/css/base.scss'
import VueLazyload from 'vue-lazyload'
// 导入自定义插件
import Loading from './plugin/loading/index'
// 导入 vue-meta-info 统一管理SEO三大标签
import MetaInfo from 'vue-meta-info'
import VConsole from 'vconsole'

Vue.use(MetaInfo)

/*
* 使用 VConsole 在移动端使用控制台
* 先 install
* const vconsole = new VConsole()
* Vue.use(vconsole)
* */

const vconsole = new VConsole()
Vue.use(vconsole)

Vue.use(VueLazyload, {
  // 可以通过配置loading来设置图片还未加载好之前的占位图片
  loading: require('./assets/images/loading.png')
})

Vue.use(Loading, {
  title: '正在加载ing...'
})

fastclick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  // 以下代码会在安装 vue-cli-plugin-prerender-spa 预渲染插件之后自动添加
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app')
