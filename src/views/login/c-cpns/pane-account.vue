<template>
  <div class="pane-account">
    <el-form
      :model="account"
      label-width="60"
      size="large"
      :rules="accountRules"
      status-icon
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormRules, ElForm } from 'element-plus'
import useLoginStore from '@/store/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'

const accountRules: FormRules = {
  name: [
    { required: true, message: '请输入账号信息~', trigger: 'blur' },
    {
      pattern: /[a-z0-9]{6,20}$/,
      message: '必须是6~20数字或字母组成',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请输入密码~', trigger: 'blur' },
    {
      pattern: /[a-z0-9]{3,16}$/,
      message: '必须是3~16数字或字母组成',
      trigger: 'blur'
    }
  ]
}

const account = reactive<IAccount>({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})

// 3. 执行账号登陆逻辑
const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()
function loginAction(isRemPwd: boolean) {
  formRef.value?.validate((valid: any) => {
    if (valid) {
      // 1.获取用户输入的账号和密码
      const name = account.name
      const password = account.password

      // 2. 向服务器发送网络请求
      loginStore.loginAccountAction({ name, password }).then(() => {
        if (isRemPwd) {
          localCache.setCache('name', name)
          localCache.setCache('password', password)
        } else {
          localCache.removeCache('name')
          localCache.removeCache('password')
        }
      })
    } else {
      ElMessage.error('Oops, 请输入正确的格式后登陆')
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped>
.pane-account {
}
</style>
