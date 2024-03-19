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
    <page-modal :modal-config="modalConfig" ref="pageModalRef" />
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search.config'

import PageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config'

import PageModal from '@/components/page-modal/page-modal.vue'
import modalConfig from './config/modal.config'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

// 逻辑关系
const { pageContentRef, handleQueryBtnClick, handleResetBtnClick } =
  usePageContent()
const { pageModalRef, handleNewBtnClick, handleEditBtnClick } = usePageModal()
</script>

<style lang="less" scoped>
.role {
}
</style>
