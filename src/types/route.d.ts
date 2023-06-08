/*
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-06-08 09:36:12
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-08 19:24:38
 * @FilePath: /admin-vite/src/types/route.d.ts
 * @Description:扩展 RouteMeta 接口
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
 */
export {}
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    isLink?: string
    isHide?: boolean
    isKeepAlive?: boolean
    isAffix?: boolean
    isIframe?: boolean
    roles?: string[]
    icon?: string
  }
}
