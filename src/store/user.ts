/*
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-06-07 09:56:56
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-08 15:36:55
 * @FilePath: /admin-vite/src/store/user.ts
 * @Description: 用户信息模块
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
 */
// import { defineStore } from 'pinia'
interface IuserInfo {
  userName: string // 用户姓名
  userId: string // 用户id
  avatar: string // 用户头像
  mobile: string // 用户手机号
  gender: number // 用户性别 1男2女
  authBtnList: string[]// 按钮权限数组
  accessToken: string // token令牌
}
// interface Ilogin {
//   userName: string
//   passWord: string
// }
export const useStore = defineStore(
  'user',
  () => {
    const userInfo = reactive<IuserInfo>({
      userName: '周恩波',
      userId: '888888',
      authBtnList: ['admin'],
      avatar: 'https://commimg.obs.cn-east-2.myhuaweicloud.com:443/uploadFile90ca02c673144eb38533935e39a4c906.7e5ecf3ca7f24652a3b1cf326372b291.png',
      mobile: '17613141816',
      accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
      gender: 1
    })
    /**
     * @description: 登陆接口
     * @return {*}
     */
    // const userLogin = async (param: Ilogin): Promise<boolean> => {
    //   const result = await login({ username: param.userName, password: param.passWord })
    //   if (result) {
    //   }
    //   const cloneUserInfo = {}
    //   Object.keys(userInfo).forEach((item, index) => {
    //     // TODO 解决TS hasOwnProperty方法报错
    //     if (Object.prototype.hasOwnProperty.call(userInfo, item)) {
    //       // cloneUserInfo[item] =
    //     }
    //   })

    //   return true
    // }
    return { userInfo }
  },
  {
    persist: true
  }
)
