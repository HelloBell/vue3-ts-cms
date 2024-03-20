<template>
  <div class="role">
    <page-search
      :search-config="searchConfig"
      @query-click="handleQueryBtnClick"
      @reset-click="handleResetBtnClick"
    />
    <page-content
      :content-config="contentConfig"
      ref="pageContentRef"
      @new-click="handleNewBtnClick"
      @edit-click="handleEditBtnClick"
    />
    <page-modal
      :modal-config="modalConfig"
      :other-info="othenInfo"
      ref="pageModalRef"
    >
      <template #menulist
        ><el-tree
          ref="treeRef"
          :data="entireMenus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleElTreeCheck"
        />
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import type { ElTree } from 'element-plus'

import { mapMenuListToIds } from '@/utils/map-menus'

import PageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search.config'

import PageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config'

import PageModal from '@/components/page-modal/page-modal.vue'
import modalConfig from './config/modal.config'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

import useMainStore from '@/store/main/main'
import { nextTick } from 'vue'

// 逻辑关系
const { pageContentRef, handleQueryBtnClick, handleResetBtnClick } =
  usePageContent()
const { pageModalRef, handleNewBtnClick, handleEditBtnClick } =
  usePageModal(editCallBack)

const mainStore = useMainStore()
const { entireMenus } = storeToRefs(mainStore)

// 处理 ELTree 的选中
const othenInfo = ref({})
function handleElTreeCheck(data1: any, data2: any) {
  console.log(data2.halfCheckedKeys, data2.checkedKeys)
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  othenInfo.value = { menuList }
}

// 编辑的回调 用于回显菜单树 不建议使用 default-checked-keys 属性(因为要单独设置另外一个默认展开的属性,否则默认部展开)
// 这里使用 setCheckedKeys 方法
const treeRef = ref<InstanceType<typeof ElTree>>()
function editCallBack(itemData: any) {
  // 使用nextTick等DOM更新完毕 执行
  nextTick(() => {
    const menuList = itemData.menuList
    const menuIds = mapMenuListToIds(menuList)
    treeRef.value?.setCheckedKeys(menuIds)
  })
}
</script>

<style lang="less" scoped>
.role {
}
</style>
