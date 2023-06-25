<!--
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-06-13 19:00:36
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-25 10:09:45
 * @FilePath: /admin-vite/src/views/login/components/Account.vue
 * @Description:手机号&账号登陆组件
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
-->
<template>
  <div class="login-account">
    <el-form ref="ruleFormRef" :rules="rules" :model="parmas" @submit.prevent="handelSubmit(ruleFormRef)">
      <el-form-item prop="username">
        <!-- <el-input v-model="parmas.username" :prefix-icon="User" placeholder="请输入用户名" /> -->
      </el-form-item>
      <el-form-item prop="password">
        <el-input :type="isShowPassword ? 'password' : 'text'" v-model="parmas.password" placeholder="请输入密码">
          <template #prefix>
            <div>这是icon</div>
            <!-- <el-icon class="el-input__icon">
              <Lock />
            </el-icon> -->
          </template>

          <template #suffix>
            <div>这是icon</div>
            <!-- <app-icon
              :icon="isShowPassword ? 'ph:eye-light' : 'ph:eye-closed-duotone'"
              class="login-content-password"
              @click="isShowPassword = !isShowPassword"
            /> -->
          </template>
        </el-input>
      </el-form-item>
      <el-row justify="end" class="mb-10">
        <el-col :span="4">
          <!--
            @click="forgetPass"
           -->
          <el-button link size="small" type="primary">
            忘记密码
          </el-button>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" native-type="submit" class="w-full" :loading="loading">
          {{ loading ? '登录中' : '登录' }}
        </el-button>
      </el-form-item>
    </el-form>
    <span class="tips">* 温馨提示：建议使用谷歌、Microsoft Edge，版本 79.0.1072.62 及以上浏览器，360浏览器请使用极速模式</span>
  </div>
</template>

<script lang='ts' setup>
import type { FormInstance, FormRules } from 'element-plus'
interface LoginParams {
  username: string, // 用户名
  password: string, // 密码
  grant_type: string, //
}

const parmas: LoginParams = reactive({
  username: '',
  password: '',
  grant_type: 'password'
})
const loading = ref(false)
const isShowPassword = ref(true)
const ruleFormRef = ref<InstanceType <typeof FormInstance>>()
const rules = reactive<InstanceType <typeof FormRules>>({
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'change'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'change'
    }
  ]
})
/**
 * @description: 登录
 * @param {*} formEl
 * @return {*}
 */
const handelSubmit = async (formEl: InstanceType <typeof FormInstance> | undefined) => {
  if (!formEl) return
  const validData = await formEl.validate()
  if (!validData) return false
  loading.value = true
}
</script>

<style lang='scss' scoped>
</style>
