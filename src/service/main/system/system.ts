import hyRequest from '../..'
/** 用户的网络请求 */
export function postUsersListData(queryInfo: any) {
  return hyRequest.post({
    url: '/users/list',
    data: queryInfo
  })
}

/** 用户列表删除操作 */
export function deleteUserById(id: number) {
  return hyRequest.delete({
    url: `/users/${id}`
  })
}

/** 新建用户的请求 */
export function newUserData(userInfo: any) {
  return hyRequest.post({
    url: '/users',
    data: userInfo
  })
}

/** 编辑网络请求 */
export function editUserData(id: number, userInfo: any) {
  return hyRequest.patch({
    url: `/users/${id}`,
    data: userInfo
  })
}

/** 针对页面的网络请求: 增删改查 */
export function postPageListData(pageName: string, queryInfo: any) {
  return hyRequest.post({
    url: `/${pageName}/list`,
    data: queryInfo
  })
}

export function deletePageById(pageName: string, id: number) {
  return hyRequest.delete({
    url: `/${pageName}/${id}`
  })
}

export function newPageData(pageName: string, dataInfo: any) {
  return hyRequest.post({
    url: `/${pageName}`,
    data: dataInfo
  })
}

export function editPageData(pageName: string, id: number, dataInfo: any) {
  return hyRequest.patch({
    url: `/${pageName}/${id}`,
    data: dataInfo
  })
}
