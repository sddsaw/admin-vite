/*
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-05-26 19:42:45
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-06 16:52:48
 * @FilePath: /admin-vite/vite.config.ts
 * @Description:
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [vue(), eslint(), vueJsx(),
    AutoImport({ // 无需引入相关函数就可以直接使用
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router', 'pinia'], // 自动导入vue和vue-router相关函数
      dts: 'src/types/auto-imports.d.ts', // 生成 `auto-import.d.ts` 全局声明（ts项目添加上）
      eslintrc: {
        enabled: false// 默认false, true启用。生成一次就可以，避免每次工程启动都生成，一旦生成配置文件之后，最好把enable关掉，即改成false 。否则这个文件每次会在重新加载的时候重新生成，这会导致eslint有时会找不到这个文件。当需要更新配置文件的时候，再重新打开
      }
    }),
    Components({ // 按需加载el-plus组件
      dirs: ['src/components'],
      dts: 'src/types/components.d.ts',
      resolvers: [ElementPlusResolver()]
    })
  ]
})
