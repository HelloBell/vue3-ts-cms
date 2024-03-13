<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" />
      <h2 v-show="!isFold" class="title">后台管理系统</h2>
    </div>
    <el-menu
      :default-active="defaultActive"
      :collapse="isFold"
      active-text-color="#fff"
      text-color="#b7bdc3"
      background-color="#001529"
    >
      <template v-for="item in userMenus" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <!-- 图标设置 el-icon-monitor, 使用动态组件 component -->
            <el-icon>
              <component :is="item.icon.split('-icon-')[1]" />
            </el-icon>
            <span>{{ item.name }}</span>
          </template>

          <template v-for="subitem in item.children" :key="subitem.id">
            <el-menu-item
              :index="subitem.id + ''"
              @click="handleItemClick(subitem)"
            >
              {{ subitem.name }}
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import userLoginStore from '@/store/login/login'
import { mapPathToMenu } from '@/utils/map-menus'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// 定义props
defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})

// 1.获取动态菜单
const loginStore = userLoginStore()
const userMenus = loginStore.userMenus

// 2.监听item的点击
const router = useRouter()
function handleItemClick(item: any) {
  const url = item.url
  router.push(url)
  // localCache.setCache('menuId', item.id) 试用缓存来做刷新后显示的菜单
}

// 3.ElMenu的默认菜单

// 1. 使用缓存来实现
// const firstMenuId = localCache.getCache('menuId') ?? firstMenu
// 退出登陆后, 删除 MenuId 缓存

// 2. 通过保存当前刷新的url去 userMenus
const route = useRoute()
const defaultActive = computed(() => {
  const pathMenu = mapPathToMenu(route.path, userMenus)
  return pathMenu.id + ''
})
</script>

<style lang="less" scoped>
.main-menu {
  height: 100%;
}

.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .img {
    height: 100%;
    margin: 0 10px;
  }
}

.title {
  color: #eee;
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
}

.el-menu {
  border-right: none;
  user-select: none;

  .el-sub-menu {
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135;
    }
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
