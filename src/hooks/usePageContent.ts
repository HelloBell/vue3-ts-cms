import { ref } from 'vue'
import type PageContent from '@/components/page-content/page-content.vue'

function usePageContent() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  function handleQueryBtnClick(searchForm: any) {
    pageContentRef.value?.fetchPageListData(searchForm)
  }
  function handleResetBtnClick() {
    pageContentRef.value?.fetchPageListData()
  }

  return {
    pageContentRef,
    handleQueryBtnClick,
    handleResetBtnClick
  }
}

export default usePageContent
