<!--
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-05-26 19:42:45
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-13 20:55:06
 * @FilePath: /admin-vite/src/components/HelloWorld.vue
 * @Description:
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
-->
<script setup lang="ts">

const count = ref(0)
const open = () => {
  ElMessage({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success'
  })
}
</script>

<template>
  <div class="card">
    <button type="button" @click="count++">
      count is {{ count }}
    </button>
  </div>
  <el-row class="mb-4">
    <el-button @click="open">
      Default
    </el-button>
    <el-button type="primary">
      Primary
    </el-button>
    <el-button type="success">
      Success
    </el-button>
    <el-button type="info">
      Info
    </el-button>
    <el-button type="warning">
      Warning
    </el-button>
    <el-button type="danger">
      Danger
    </el-button>
  </el-row>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
