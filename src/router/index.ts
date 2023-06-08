/*
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-06-08 09:28:20
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-08 19:45:30
 * @FilePath: /admin-vite/src/router/index.ts
 * @Description: router config
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
 */
import { createRouter, createWebHistory } from 'vue-router'
import { notFoundAndNoPower, staticRoutes } from './route'

export const router = createRouter({
  history: createWebHistory(),
  routes: [...notFoundAndNoPower, ...staticRoutes] // `routes: routes` 的缩写
})
