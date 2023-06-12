<!--
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-06-08 19:03:43
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-12 15:43:47
 * @FilePath: /admin-vite/src/views/login/index.vue
 * @Description:
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
-->
<template>
  <div class="flex justify-center items-center h-screen">
    <div class="max-w-md z-10 mx-auto  rounded-xl  overflow-hidden md:max-w-2xl">
      <div class="md:flex mb-50">
        <div class="login-left md:shrink-0 h-96 w-72 bg-bg_color p-5">
          <img class="h-52 w-52 object-cover md:h-full " src="@/assets/1.png" alt="Modern building architecture">
        </div>
        <div class="login-right bg-white h-96 p-5 w-96">
          <h1 class="flex justify-center items-center text-2xl focus-in-expand  mb-10">
            上海有我科技有限公司
          </h1>
        </div>
      </div>
      <div class="footer">
        <div class="copyright">
          Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved
        </div>
      </div>
    </div>
    <canvas id="canvas" />
  </div>
</template>

<script lang='ts' setup name="controlsLogs">
import { start } from '@/utils/start'
onMounted(() => {
  start()
})
</script>
<style lang="scss" scoped>
.login-left {
  animation: fadeInLeft .5s linear;
}

.login-right {
  animation: fadeInRight .5s  linear;
}

.login-container {
  display: grid;
  place-items: center;
  height: 100vh;
  overflow: auto;

  .login {
    min-height: 400px;
    overflow: hidden;
    border-radius: 16px;
  }

}

.footer{
  position: fixed;
  bottom: 50px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);

  .copyright {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    animation: fadeInUp 1s  linear;

    &::before {
      display: block;
      width: 100px;
      height: 1px;
      margin-right: 20px;
      background-image: linear-gradient(to left, #fff, transparent);
      content: "";
    }

    &::after {
      width: 100px;
      height: 1px;
      margin-left: 20px;
      background-image: linear-gradient(to right, #fff, transparent);
      content: "";
    }
  }
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
