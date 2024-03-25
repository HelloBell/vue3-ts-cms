import type { RouteRecordRaw } from 'vue-router'

function loadLocalRoutes() {
  // * 路由对象都在独立的文件中
  // * 从文件中将所有路由对象先读取数组中
  const localRoutes: RouteRecordRaw[] = []
  // 1.1.读取router/main所有ts文件 import.meta/require.context
  const files: Record<string, any> = import.meta.glob(
    '../router/main/**/*.ts',
    {
      eager: true
    }
  )
  for (const key in files) {
    const module = files[key]
    localRoutes.push(module.default)
  }
  return localRoutes
}

// 获取路由
export let firstMenu: any = null
export function mapMenusToRoutes(userMenus: any[]) {
  // 1.动态获取所有路由对象, 放到数组中
  const localRoutes = loadLocalRoutes()

  // 2.根据菜单去匹配正确的路由
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url)
      if (route) {
        // 1.面包屑: 给toute的顶层菜单增加重定向功能(但是只需要添加一次即可)
        if (!routes.find((item) => item.path === menu.url)) {
          routes.push({ path: menu.url, redirect: route.path })
        }
        // 2. 将二级菜单路由添加到 routes
        routes.push(route)
      }
      // 记录第一个被匹配到的菜单
      if (!firstMenu && route) firstMenu = submenu
    }
  }

  return routes
}

/**
 * 根据路径去匹配需要显示的菜单
 * @param path 需要匹配的路径
 * @param userMenus 所有的菜单
 */
export function mapPathToMenu(path: string, userMenus: any[]) {
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        return submenu
      }
    }
  }
}

interface IBreadcrumbs {
  name: string
  path: string
}
export function mapPathToBreadcrumbs(path: string, userMenus: any[]) {
  // 定义面包屑
  const breadcrumbs: IBreadcrumbs[] = []

  // 便利获取面包屑层级
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        // 1.顶层菜单
        breadcrumbs.push({ name: menu.name, path: menu.url })
        // 2.匹配菜单
        breadcrumbs.push({ name: submenu.name, path: submenu.url })
      }
    }
  }
  return breadcrumbs
}

/**
 * 菜单映射到id的列表
 * @param menuList
 * @returns { menuIds菜单ID, parentIds父级菜单id }
 */
export function mapMenuListToIds(menuList: any[]) {
  const parentIds: any[] = []
  const menuIds: any[] = []

  function recurseGetId(menus: any[]) {
    for (const item of menus) {
      if (item.children) {
        parentIds.push(item.id)
        recurseGetId(item.children)
      } else {
        menuIds.push(item.id)
      }
    }
  }
  recurseGetId(menuList)
  return { menuIds, parentIds }
}

/**
 * 菜单映射按钮权限
 * @param menuList
 * @return 按钮权限数组
 */
export function mapMenusToPermissions(menuList: any[]) {
  const permissions: any = []
  function recurseGetPermissions(menus: any[]) {
    for (const item of menus) {
      if (item.type === 3) {
        if (item.permission) permissions.push(item.permission)
      } else {
        recurseGetPermissions(item.children ?? [])
      }
    }
  }
  recurseGetPermissions(menuList)

  return permissions
}
