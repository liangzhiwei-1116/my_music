import axios from 'axios'
import Vue from 'vue'

// 进行全局配置
axios.defaults.withCredentials = true
axios.defaults.timeout = 5000
const httpLogin = axios.create({
  baseURL: 'http://192.168.31.217:4000/'
})
const httpMusic = axios.create({
  baseURL: 'http://192.168.31.217:3000/'
})

// 定义 count 记录请求数量
let count = 0

// 添加请求拦截器
httpMusic.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  count++
  Vue.showLoading()
  return config
}, function (error) {
  // 对请求错误做些什么
  Vue.hiddenLoading()
  return Promise.reject(error)
})

// 添加响应拦截器
httpMusic.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  count--
  if (count === 0) {
    Vue.hiddenLoading()
  }
  return response
}, function (error) {
  // 对响应错误做点什么
  Vue.hiddenLoading()
  return Promise.reject(error)
})

// 封装请求方法
export default {
  // get方法
  get: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      httpMusic.get(path, {
        params: data
      }).then(function (response) {
        resolve(response.data)
      }).catch(function (error) {
        reject(error)
      })
    })
  },

  // post方法
  post: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      httpLogin.post(path, data).then(function (response) {
        resolve(response.data)
      }).catch(function (error) {
        reject(error)
      })
    })
  },

  // all方法
  all: function (list) {
    return new Promise((resolve, reject) => {
      // 下列方法是axios的静态方法，不是axios实例的方法
      axios.all(list)
        .then(axios.spread((...result) => {
          // 请求都执行完成之后
          resolve(result)
        }))
        .catch((err) => {
          reject(err)
        })
    })
  }
}
