/*
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-06-08 10:34:26
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-08 17:45:54
 * @FilePath: /admin-vite/src/router/modules/logs.ts
 * @Description: 系统日志路由模块
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
 */
import { type RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/logs',
    name: 'logs',
    component: async () => await import('@/layout/routerView/parent.vue'),
    redirect: '/logs/controls',
    meta: {
      title: '日志管理',
      isLink: '',
      isHide: false,
      isKeepAlive: true,
      isAffix: false,
      isIframe: false,
      roles: ['admin'],
      icon: 'iconfont icon-xitongshezhi'
    },
    children: [
      {
        path: '/logs/controls',
        name: 'controlsLogs',
        component: async () => await import('@/views/logs/controls/index.vue'),
        meta: {
          title: '操作日志',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin'],
          icon: 'iconfont icon-caidan'
        }
      },
      {
        path: '/logs/error',
        name: 'errorLogs',
        component: async () => await import('@/views/logs/error/index.vue'),
        meta: {
          title: '错误日志',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin'],
          icon: 'ele-ColdDrink'
        }
      }
    ]
  }
] as RouteRecordRaw[]
