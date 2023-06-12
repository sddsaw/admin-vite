/*
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-06-06 13:08:32
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-12 14:19:30
 * @FilePath: /admin-vite/tailwind.config.js
 * @Description:tailwindcss config
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg_color: 'var(--next-bg-color)'
      }
    }
  },
  plugins: []
}
