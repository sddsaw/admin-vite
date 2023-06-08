/*
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-05-26 20:01:18
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-08 14:03:33
 * @FilePath: /admin-vite/.eslintrc.cjs
 * @Description: eslint 配置规则
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
    'no-undef': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off', // 关闭组件命名规则
    'vue/max-attributes-per-line': ['error', { // 标签一行最多容纳5个属性，超过5个全部换行
      singleline: {
        max: 5
      },
      multiline: {
        max: 1
      }
    }]
  }
}
