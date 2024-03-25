import { defineStore } from 'pinia'
import {
  postUsersListData,
  deleteUserById,
  newUserData,
  editUserData,
  postPageListData,
  newPageData,
  deletePageById,
  editPageData
} from '@/service/main/system/system'
import type { ISystemState } from './type'
import { ElMessage } from 'element-plus'
import useMainStore from '../main'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0,

    pageList: [],
    pageTotalCount: 0
  }),
  actions: {
    async postUserListAction(queryInfo: any) {
      const usersListResult = await postUsersListData(queryInfo)
      const { totalCount, list } = usersListResult.data
      this.usersTotalCount = totalCount
      this.usersList = list
    },

    async deleteUserByIdAction(id: number) {
      const deleteUserResult = await deleteUserById(id)

      this.postUserListAction({ offset: 0, size: 10 })
    },

    async newUserDataAction(userInfo: any) {
      // 1.创建新的用户
      const newResult = await newUserData(userInfo)
      console.log(newResult)

      // 2.重新请求新的数据
      this.postUserListAction({ offset: 0, size: 10 })
    },

    async editUserDataAction(id: number, userInfo: any) {
      // 1.更新用户的数据
      const editResult = await editUserData(id, userInfo)

      // 2.重新请求新的数据
      this.postUserListAction({ offset: 0, size: 10 })
    },

    /** 针对页面的数据: 增删改查 */
    async postPageListAction(pageName: string, queryInfo: any) {
      const pageListResult = await postPageListData(pageName, queryInfo)
      const { totalCount, list } = pageListResult.data

      this.pageList = list
      this.pageTotalCount = totalCount ?? 0
    },
    async deletePageByIdAction(pageName: string, id: number) {
      const deleteResult = await deletePageById(pageName, id)
      console.log(deleteResult)
      this.postPageListAction(pageName, { offset: 0, size: 10 })

      // 重新获取完整的数据
      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction()
    },
    async newPageDataAction(pageName: string, dataInfo: any) {
      const newResult = await newPageData(pageName, dataInfo)
      console.log(newResult)
      this.postPageListAction(pageName, { offset: 0, size: 10 })

      // 重新获取完整的数据
      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction()
    },
    async editPageDataAction(pageName: string, id: number, dataInfo: any) {
      const editResult = await editPageData(pageName, id, dataInfo)
      console.log(editResult)
      this.postPageListAction(pageName, { offset: 0, size: 10 })

      // 重新获取完整的数据
      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction()
    }
  }
})

export default useSystemStore
