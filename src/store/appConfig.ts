
/*
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-06-13 14:13:30
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-13 15:52:50
 * @FilePath: /admin-vite/src/store/appConfig.ts
 * @Description:
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
 */
interface IappConfig {
  globalTitle: string
  globalViceTitle: string
  globalI18n: string
  globalComponentSize: string
  isWartermark: boolean
  wartermarkText: string
  isFooter: boolean
  isLockScreen: boolean
  lockScreenTime: number
  primary: string
  isIsDark: boolean
}
export const appConfigStore = defineStore('appConfig', () => {
  const appConfig = reactive<IappConfig>({
    globalTitle: '上海有我科技有限公司', // 网站主标题（菜单导航、浏览器当前网页标题）
    globalViceTitle: '上海有我科技有限公司', // 网站副标题（登录页顶部文字）
    globalI18n: 'zh-en', // 默认初始语言，可选值"<zh-cn|en|zh-tw>"，默认 zh-cn
    globalComponentSize: 'large', // 默认全局组件大小，可选值"<large|'default'|small>"，默认 'large'
    isWartermark: false, // 是否开启水印
    wartermarkText: '这个是水印', // 水印文案
    isFooter: false, // 是否开启 Footer 底部版权信息
    isLockScreen: false, // 是否开启自动锁屏
    lockScreenTime: 30, // 开启自动锁屏倒计时(s/秒)
    primary: '#409eff', // 默认 primary 主题颜色
    isIsDark: false// 是否开启深色模式
  })
  return { appConfig }
})
