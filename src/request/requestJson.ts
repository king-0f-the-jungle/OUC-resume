import axios from 'axios'
import { Base64 } from 'js-base64'

const requestJson = axios.create({
  baseURL: './json/',
  timeout: 1000,
})
// 请求响应拦截器
requestJson.interceptors.request.use(
  function (config) {
    // 请求拦截器
    config.url += '.json'
    return config
  },
  function (error) {
    // 异常处理
    return Promise.reject(error)
  },
)
requestJson.interceptors.response.use(
  function onFulfilled(response) {
    response.data = JSON.parse(Base64.decode(response.data.base64)).data as object
    console.log(response.data)
    return response
  },
  function onRejected(error) {
    return Promise.reject(error)
  },
)

export default requestJson
