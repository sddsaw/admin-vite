/*
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-05-26 19:42:45
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-05-28 17:52:22
 * @FilePath: /admin-vite/vite.config.ts
 * @Description:
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [vue(), eslint()]
})
