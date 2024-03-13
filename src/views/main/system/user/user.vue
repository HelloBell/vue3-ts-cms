<template>
  <div class="user">
    <user-search
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    ></user-search>
    <user-content
      ref="contentRef"
      @newClick="handleNewBtnClick"
      @editClick="handleEditBtnClick"
    ></user-content>
    <user-modal ref="modalRef"></user-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import userSearch from './c-cpns/user-search.vue'
import userContent from './c-cpns/user-content.vue'
import userModal from './c-cpns/user-modal.vue'

// 对contentRef组件的操作
const contentRef = ref<InstanceType<typeof userContent>>()
function handleQueryClick(formData: any) {
  contentRef.value?.fetchUserListData(formData)
}

// 处理重置
function handleResetClick() {
  contentRef.value?.fetchUserListData()
}

// 对modal组件的操作
const modalRef = ref<InstanceType<typeof userModal>>()
function handleNewBtnClick() {
  modalRef.value?.setModalVisible()
}

function handleEditBtnClick(itemData: any) {
  modalRef.value?.setModalVisible(false, itemData)
}
</script>

<style lang="less" scoped>
.user {
  border-radius: 20px;
  overflow: hidden;
}
</style>
