/*
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-06-08 20:52:28
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-09 16:43:09
 * @FilePath: /admin-vite/src/utils/request.ts
 * @Description: 封装axios请求库
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
 */
import axios, { type InternalAxiosRequestConfig, type AxiosResponse, type AxiosInstance, type AxiosError } from 'axios'
import { useStore } from '@/store/user'
const request: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Basic Y2dtLXdlYi1tYW5hZ2VyOmNnbS13ZWItbWFuYWdlci1wdyMkIyVA'
  }
})

/**
 * @description: 错误异常处理
 * @return { error }
 */
// const httpErrorStatusHandle = (error: AxiosError): void => {
//   console.log(error.response?.config.url)
//   // 处理被取消的请求
//   if (axios.isCancel(error)) { console.error(`请求的重复请求：${error.message}`); return }
//   let message = ''
//   if (error?.response) {
//     switch (error.response.status) {
//       case 302: message = '接口重定向了！'; break
//       case 400: message = '参数不正确！'; break
//       case 401: message = '您未登录，或者登录已经超时，请先登录！'; break
//       case 403: message = '您没有权限操作！'; break
//       case 404: message = `请求地址出错: ${error?.response?.config?.url}`; break // 在正确域名下
//       case 408: message = '请求超时！'; break
//       case 409: message = '系统已存在相同数据！'; break
//       case 500: message = '服务器内部错误！'; break
//       case 501: message = '服务未实现！'; break
//       case 502: message = '网关错误！'; break
//       case 503: message = '服务不可用！'; break
//       case 504: message = '服务暂时无法访问，请稍后再试！'; break
//       case 505: message = 'HTTP版本不受支持！'; break
//       default: message = '异常问题，请联系管理员！'; break
//     }
//   }
//   if (error?.message?.includes('timeout')) message = '网络请求超时！'
//   if (error?.message?.includes('Network')) message = window.navigator.onLine ? '服务端异常！' : '您断网了！'

//   ElMessage({
//     type: 'error',
//     message
//   })
// }
/**
 * @description: 请求拦截
 * @return {*}
 */

request.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const userInfo = useStore().userInfo
  const accessToken = userInfo.accessToken
  console.log(accessToken)
  // if (accessToken) {
  //   config?.headers?.Authorization = accessToken
  // }
  return config
}, async (error: AxiosError) => {
  return await Promise.reject(error)
})

/**
 * @description:
 * @return {*}
 */
request.interceptors.response.use((response: AxiosResponse) => {
  return response
}, async error => {
  return await Promise.reject(error)
})

export default request
