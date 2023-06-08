/*
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-06-06 17:30:00
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-07 10:11:39
 * @FilePath: /admin-vite/src/store/index.ts
 * @Description: 初始化pinia
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
 */
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia
