<template>
  <div class="header-info">
    <div class="operation">
      <span>
        <el-icon><Bell /></el-icon>
      </span>
      <span>
        <!-- <span class="dot"></span> -->
        <el-icon><ChatDotRound /></el-icon>
      </span>
      <span>
        <el-icon><Notification /></el-icon>
      </span>
    </div>

    <el-dropdown>
      <span class="user-info">
        <el-avatar :size="30" src="" />
        <span class="name">dada</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleExitClick()">
            <el-icon><CircleClose /></el-icon>
            <span>退出系统</span>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <el-icon><User /></el-icon>
            <span>个人信息</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon><Unlock /></el-icon><span>修改密码</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'

const router = useRouter()

function handleExitClick() {
  localCache.removeCache(LOGIN_TOKEN)
  router.push('/login')
}
</script>

<style lang="less" scoped>
.operation {
  display: inline-flex;
  margin-right: 20px;

  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;

    &:hover {
      background-color: #f2f2f2;
    }

    i {
      font-size: 20px;
    }

    .dot {
      position: absolute;
      top: 3px;
      right: 3px;
      z-index: 10;
      border-radius: 100%;
      background-color: red;
      width: 6px;
      height: 6px;
    }
  }
}

.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;
  .name {
    margin-left: 5px;
  }
}

.info {
  :global(.el-dropdown-menu__item) {
    line-height: 36px;
    padding: 6px 22px;
  }
}
</style>
