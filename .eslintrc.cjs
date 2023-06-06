/*
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-05-26 20:01:18
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-06 15:55:16
 * @FilePath: /admin-vite/.eslintrc.cjs
 * @Description:
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard-with-typescript',
    './.eslintrc-auto-import.json'
  ],
  overrides: [
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']

  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-undef': 0
  }
}
