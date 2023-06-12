/*
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-06-09 10:49:34
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-12 09:44:09
 * @FilePath: /admin-vite/src/api/user.ts
 * @Description:
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
 */
import request from '@/utils/request'
import qs from 'qs'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setPassword = async (data: any) => {
  return await request({
    method: 'PUT',
    data,
    url: 'admin/user/checkCode/password',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [
      (data) => {
        return qs.stringify(data)
      }
    ]
  })
}
export const login = async (data: any) => {
  return await request({
    method: 'POST',
    data,
    url: '/api/user/login'
  })
}
