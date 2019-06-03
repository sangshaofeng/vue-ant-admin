import axios from 'axios'
import { message } from 'ant-design-vue';

// 创建axios实例
const service = axios.create({
  baseURL: ' https://www.easy-mock.com',
  timeout: 5000
})

// 请求拦截
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {

  },
  error => {
    message.error(error.message)
  }
)

export default service
