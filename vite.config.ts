/*
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-05-26 19:42:45
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-05-31 19:45:15
 * @FilePath: /admin-vite/vite.config.ts
 * @Description:
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
export default defineConfig({
  plugins: [vue(), eslint(), vueJsx()]
})
