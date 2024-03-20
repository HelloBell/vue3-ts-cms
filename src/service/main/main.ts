import hyRequest from '..'

/** 获取角色列表 */
export function getEntireRoles() {
  return hyRequest.post({
    url: '/role/list'
  })
}

/** 获取部门列表 */
export function getEntireDepartments() {
  return hyRequest.post({
    url: '/department/list'
  })
}

/** 获取完整的菜单列表 */
export function getEntireMenus() {
  return hyRequest.post({
    url: '/menu/list'
  })
}
