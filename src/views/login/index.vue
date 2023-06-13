<!--
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-06-08 19:03:43
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-12 17:52:32
 * @FilePath: /admin-vite/src/views/login/index.vue
 * @Description:
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
-->
<template>
  <div class="flex-cc h-screen">
    <div class="mx-auto z-10  rounded-xl  overflow-hidden ">
      <div class="md:flex md:h-[250px] lg:h-[400px] mb-50 ">
        <div class="login-left md:w-[200px] lg:w-[300px] bg-bg_color p-5">
          <img class="h-52 w-52 object-cover md:h-full " src="@/assets/1.png" alt="Modern building architecture">
        </div>
        <div class="login-right bg-white p-5 w-[415px]">
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

.login-top{
  background-color: red;
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
