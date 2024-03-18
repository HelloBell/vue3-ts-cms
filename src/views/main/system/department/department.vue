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
