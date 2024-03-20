import { ref } from 'vue'
import type PageModal from '@/components/page-modal/page-modal.vue'
type EditFnType = (data: any) => void

function usePageModal(editCallBack?: EditFnType) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  function handleNewBtnClick() {
    pageModalRef.value?.setModalVisible()
  }
  function handleEditBtnClick(itemData: any) {
    pageModalRef.value?.setModalVisible(false, itemData)

    if (editCallBack) editCallBack(itemData)
  }

  return { pageModalRef, handleNewBtnClick, handleEditBtnClick }
}

export default usePageModal
