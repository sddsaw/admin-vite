/*
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-05-26 19:42:45
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-13 11:34:48
 * @FilePath: /admin-vite/src/main.ts
 * @Description:
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
 */
import { createApp } from 'vue'
// 加载全局样式
import './styles/index.scss'
import App from './App.vue'
import pinia from './store'
import router from '@/router'
const app = createApp(App)
app.use(pinia).use(router).mount('#app')
