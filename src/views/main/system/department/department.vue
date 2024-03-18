<template>
  <div class="department">
    <page-search
      :search-config="searchConfig"
      @query-click="handleQueryBtnClick"
      @reset-click="handleResetBtnClick"
    ></page-search>
    <page-content
      :content-config="contentConfig"
      @new-click="handleNewBtnClick"
      @edit-click="handleEditBtnClick"
      ref="pageContentRef"
    >
    </page-content>
    <page-modal :modal-config="modalConfigRef" ref="pageModalRef"></page-modal>
  </div>
</template>

<script setup lang="ts" name="department">
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import PageModal from '@/components/page-modal/page-modal.vue'
import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'
import { ref, computed } from 'vue'
import useMainStore from '@/store/main/main'

import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

// 对modalConfig进行操作
const modalConfigRef = computed(() => {
  const mainStore = useMainStore()
  const departments = mainStore.entireDepartments.map((item) => {
    return { label: item.name, value: item.id }
  })
  modalConfig.formItems.forEach((item) => {
    if (item.prop === 'parentId') {
      item.options.push(...departments)
    }
  })

  return modalConfig
})

// hooks 相同逻辑的抽取
// 点击search centent的操作: 搜索/重置
const { pageContentRef, handleQueryBtnClick, handleResetBtnClick } =
  usePageContent()

// 点击content modal的操作: 新建/编辑
const { pageModalRef, handleEditBtnClick, handleNewBtnClick } = usePageModal()
</script>

<style scoped>
.department {
}
</style>
