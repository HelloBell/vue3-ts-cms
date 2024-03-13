<template>
  <div class="department">
    <page-search
      :search-config="searchConfig"
      @query-click="handleQueryBtnClick"
      @reset-click="handleResetBtnClick"
    ></page-search>
    <page-content
      @new-click="handleNewBtnClick"
      @edit-click="handleEditBtnClick"
      ref="pageContentRef"
    ></page-content>
    <page-modal ref="pageModalRef"></page-modal>
  </div>
</template>

<script setup lang="ts" name="department">
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from './c-cpns/page-content.vue'
import PageModal from './c-cpns/page-modal.vue'
import searchConfig from './config/search.config'

import { ref } from 'vue'

// 搜索/重置
const pageContentRef = ref<InstanceType<typeof PageContent>>()
function handleQueryBtnClick(searchForm: any) {
  pageContentRef.value?.fetchPageListData(searchForm)
}
function handleResetBtnClick() {
  pageContentRef.value?.fetchPageListData()
}

// 新建/编辑
const pageModalRef = ref<InstanceType<typeof PageModal>>()
function handleNewBtnClick() {
  pageModalRef.value?.setModalVisible()
}
function handleEditBtnClick(itemData: any) {
  pageModalRef.value?.setModalVisible(false, itemData)
}
</script>

<style scoped>
.department {
}
</style>
