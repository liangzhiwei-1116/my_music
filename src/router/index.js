import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    component: () => import('../views/Register')
  },
  {
    path: '/recommend',
    component: () => import('../views/Recommend'),
    children: [
      {
        path: 'detail/:id/:type',
        component: () => import('../views/Detail')
      }
    ]
  },
  {
    path: '/singer',
    component: () => import('../views/Singer'),
    children: [
      {
        path: 'detail/:id/:type',
        component: () => import('../views/Detail')
      }
    ]
  },
  {
    path: '/rank',
    component: () => import('../views/Rank'),
    children: [
      {
        path: 'detail/:id/:type',
        component: () => import('../views/Detail')
      }
    ]
  },
  {
    path: '/search',
    component: () => import('../views/Search')
  },
  {
    path: '/account',
    component: () => import('../views/Account')
  },
  {
    path: '/setting',
    component: () => import('../views/Setting')
  }
]

const router = new VueRouter({
  /*
  注意点: 如果Router中使用的是history模式, 那么打包之后的项目不能刷新, 刷新就会出现404
  解决方案: 1.Router这两个不要使用history模式, 使用hash模式
           2.在服务端上面进行一些额外的配置
  * */
  // 注意点: 如果需要使用预渲染的插件, 那么Router的模式必须是history模式
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
