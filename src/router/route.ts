/*
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-06-08 09:27:58
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-08 19:35:50
 * @FilePath: /admin-vite/src/router/route.ts
 * @Description:
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
 */
import { type RouteRecordRaw } from 'vue-router'

/**
 * @description: 使用vite提供的api进行导入路由元信息
 * @return {*}
 */
const importRoute = (): RouteRecordRaw[] => {
  const routeModules: Record<string, any> = import.meta.glob(
    './modules/**/*.ts',
    {
      eager: true
    }
  )
  const routesArray: RouteRecordRaw[] = []
  Object.keys(routeModules).forEach(key => {
    routesArray.push(...routeModules[key].default)
  })
  return routesArray
}
const childrenRoute = importRoute()

/**
 * @description: 定义动态路由
 * @return  返回路由菜单数据
 */
export const dynamicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    component: async () => await import('@/layout/index.vue'),
    redirect: '/home',
    children: [{
      path: '/home',
      name: 'home',
      component: async () => await import('@/views/home/index.vue'),
      meta: {
        title: 'message.router.home',
        isLink: '',
        isHide: false,
        isKeepAlive: true,
        isAffix: true,
        isIframe: false,
        icon: 'iconfont icon-shouye'
      }
    },
    ...childrenRoute
    ]
  }
]

/**
 * @description: 定义404、401界面
 * @return {*}
 */
export const notFoundAndNoPower = [
  {
    path: '/:path(.*)*',
    name: 'notFound',
    component: async () => await import('@/views/error/404.vue'),
    meta: {
      title: 'message.staticRoutes.notFound',
      isHide: true
    }
  },
  {
    path: '/401',
    name: 'noPower',
    component: async () => await import('@/views/error/401.vue'),
    meta: {
      title: 'message.staticRoutes.noPower',
      isHide: true
    }
  }
]

/**
 * @description 定义静态路由（默认路由），请求接口路由数据时，会覆盖 dynamicRoutes 第一个顶级 children 的内容（全屏，不包含 layout 中的路由出口）
 * @returns 返回路由菜单数据
 */
export const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: async () => await import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  }
]
