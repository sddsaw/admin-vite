/*
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-06-06 16:11:17
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-06 16:16:19
 * @FilePath: /admin-vite/src/types/element-plus.d.ts
 * @Description: 解决按需引入后ElMessage与ElLoading 的问题（找不到名称“ElMessage”问题。）
 * 原因：它们与普通的标签组件不同，它们两都是可以运行在script上的API,而这个文件也是引入的API放到全局，然后可以在script使用的，在这文件里的是自动按需导入的，
 * 可以看下源码的导出,node_modules >element-plus>global.d.ts
 * 可以看到这是分两个类型的,
 * 一个是GlobalComponents(全局组件),
 * 一个是 ComponentCustomProperties(组件自定义属性)
 * https://blog.csdn.net/weixin_59916662/article/details/127334196
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
 */
/* eslint-disable */
export {}

declare global {
  const ElMessage: typeof import('element-plus')['ElMessage']
  const ElLoading: typeof import('element-plus')['ElLoadingService']
}
