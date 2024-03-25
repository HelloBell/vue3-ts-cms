import { ref } from 'vue'
import type PageModal from '@/components/page-modal/page-modal.vue'
type CallbackFnType = (data?: any) => void

function usePageModal(
  newCallback?: CallbackFnType,
  editCallBack?: CallbackFnType
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  function handleNewBtnClick() {
    pageModalRef.value?.setModalVisible()
    if (newCallback) newCallback()
  }
  function handleEditBtnClick(itemData: any) {
    pageModalRef.value?.setModalVisible(false, itemData)
    if (editCallBack) editCallBack(itemData)
  }

  return { pageModalRef, handleNewBtnClick, handleEditBtnClick }
}

export default usePageModal
