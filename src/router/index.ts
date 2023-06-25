/*
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-06-08 09:28:20
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-13 18:55:18
 * @FilePath: /admin-vite/src/router/index.ts
 * @Description: router config
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
 */
import { createRouter, createWebHistory } from 'vue-router'
import { notFoundAndNoPower, staticRoutes } from './route'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useStore } from '@/store/user'
import { appConfigStore } from '@/store/appConfig'
import pinia from '@/store'
NProgress.configure({ showSpinner: false })
// 路由白名单
const whiteList = ['/login']
const { appConfig: { globalTitle } } = appConfigStore(pinia)
const router = createRouter({
  history: createWebHistory(),
  routes: [...notFoundAndNoPower, ...staticRoutes] // `routes: routes` 的缩写
})

/**
 * @description: 路由加载前
 * @param {*} to
 * @param {*} from
 * @param {*} next
 * @return {*}
 */
router.beforeEach((to, _from, next) => {
  if (to.meta.title != null) NProgress.start()
  const { userInfo: { accessToken } } = useStore(pinia)
  const isAccessToken = accessToken.length > 0
  if (isAccessToken) {
    if (to.path === '/login') {
      next('/home')
      NProgress.done()
    } else {
      const routesList = []
      if (routesList.length > 0) next()
      else {
        // 开启控制路由方法
        next({ path: to.path, query: to.query })
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      // 在自由登录白名单中，直接进入
      next()
      NProgress.done()
    } else {
      // 其他没有访问权限的页面被重定向到登录页面。
      next(`/login?redirect=${to.fullPath}`)
      NProgress.done()
    }
  }
  // if (to.path === '/login' && !isAccessToken) {
  //   next()
  //   NProgress.done()
  // } else {
  //   if (!isAccessToken) {
  //     // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  //     next(`/login?redirect=${to.path}&params=${JSON.stringify(to.query ? to.query : to.params)}`)
  //     NProgress.done()
  //   } else if (isAccessToken && to.path === '/login') {
  //     next('/home')
  //     NProgress.done()
  //   } else {
  //     const routesList = []
  //     if (routesList.length > 0) next()
  //     else next({ path: to.path, query: to.query })
  //   }
  // }
})

/**
 * @description: 路由加载后
 * @return {*}
 */
router.afterEach((to) => {
  NProgress.done()
  document.title = `${to.meta.title}-${globalTitle}`
})

export default router
