<!--
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-06-08 11:37:29
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-08 15:57:16
 * @FilePath: /admin-vite/src/layout/routerView/parent.vue
 * @Description: 路由根容器
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
-->
<template>
  <div class="layout-parent">
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <transition mode="out-in">
          <keep-alive :include="getKeepAliveNames">
            <!-- 试验性功能 -->
            <suspense>
              <!-- key 强制在复用的视图之间进行过渡
              Vue 可能会自动复用看起来相似的组件，从而
              忽略了任何过渡。幸运的是，可以添加一个 key
               属性来强制过渡。这也允许你在相同路由上使用不同的参数触发过渡-->
              <component :is="Component" :key="1" />
              <!-- 加载中状态 -->
              <template #fallback>
                正在加载...
              </template>
            </suspense>
          </keep-alive>
        </transition>
      </template>
    </router-view>
  </div>
</template>

<script lang='ts' setup name="layoutParentView">
// 获取组件缓存列表(name值)
const getKeepAliveNames = computed(() => {
  return ['home', 'about']
})
</script>
