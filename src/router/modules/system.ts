
/*
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-06-08 09:33:51
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-08 17:47:42
 * @FilePath: /admin-vite/src/router/modules/system.ts
 * @Description:系统设置菜单模块
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
 */
import { type RouteRecordRaw } from 'vue-router'
export default [
  {
    path: '/system',
    name: 'system',
    component: async () => await import('@/layout/routerView/parent.vue'),
    redirect: '/system/menu',
    meta: {
      title: '系统设置',
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
        path: '/system/dept',
        name: 'systemDept',
        component: async () => await import('@/views/system/dept/index.vue'),
        meta: {
          title: '部门管理',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          icon: 'ele-OfficeBuilding'
        }
      },
      {
        path: '/system/dic',
        name: 'systemDic',
        component: async () => await import('@/views/system/dic/index.vue'),
        meta: {
          title: '字典管理',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin'],
          icon: 'ele-SetUp'
        }
      },
      {
        path: '/system/menu',
        name: 'systemMenu',
        component: async () => await import('@/views/system/menu/index.vue'),
        meta: {
          title: '菜单管理',
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
        path: '/system/role',
        name: 'systemRole',
        component: async () => await import('@/views/system/role/index.vue'),
        meta: {
          title: '角色管理',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin'],
          icon: 'ele-ColdDrink'
        }
      },
      {
        path: '/system/user',
        name: 'systemUser',
        component: async () => await import('@/views/system/user/index.vue'),
        meta: {
          title: '用户管理',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin'],
          icon: 'iconfont icon-icon-'
        }
      },
      {
        path: '/system/version',
        name: 'systemVersion',
        component: async () => await import('@/views/system/version/index.vue'),
        meta: {
          title: '版本管理',
          isLink: '',
          isHide: false,
          isKeepAlive: false,
          isAffix: false,
          isIframe: false,
          icon: 'ele-OfficeBuilding'
        }
      }
    ]
  }
] as RouteRecordRaw[]
