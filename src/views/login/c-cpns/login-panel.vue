<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <div class="tabs">
      <el-tabs v-model="activeName" type="border-card" stretch>
        <el-tab-pane label="账号登陆" name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">账号登陆</span>
            </div>
          </template>
          <paneAccount ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <template #label
            ><div class="label">
              <el-icon><Cellphone /></el-icon>
              <span class="text">手机登陆</span>
            </div></template
          >
          <panePhone ref="phoneRef" />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
      class="login-btn"
      type="primary"
      size="large"
      @click="handleLoginBtnClick"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import PaneAccount from './pane-account.vue'
import PanePhone from './pane-phone.vue'
import { localCache } from '@/utils/cache'

const isRemPwd = ref<boolean>(localCache.getCache('isRemPwd') ?? false)
watch(isRemPwd, (newValue) => {
  localCache.setCache('isRemPwd', newValue)
})

const activeName = ref('account')
const accountRef = ref<InstanceType<typeof PaneAccount>>()
const phoneRef = ref<InstanceType<typeof PanePhone>>()

function handleLoginBtnClick() {
  if (activeName.value === 'account') {
    // 1. 获取子组件实例
    accountRef.value?.loginAction(isRemPwd.value)
  } else {
    phoneRef.value?.loginAction()
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  .title {
    text-align: center;
  }
  .tabs {
    margin-top: 20px;

    .label {
      display: flex;
      justify-content: center;
      align-items: center;

      .text {
        margin-left: 5px;
      }
    }
  }

  .controls {
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    margin-top: 5px;
    width: 100%;
  }
}
</style>
