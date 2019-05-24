import constantRouterMap from '@/router/routes'

/**
 * 路由中的roles是否在user的roles中
 * @param {Array} roles 
 * @param {Object} route 
 * @return boolean
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  }
  return true
}

/**
 * 过滤符合权限的路由
 * @param {Array} routes 
 * @param {Array} roles
 * @return Array
 */
export function filterPermissionRoutes(routes, roles) {
  const resRoutes = []
  routes.forEach(route => {
    const item = { ...route }
    if (hasPermission(roles, item)) {
      if (item.children) {
        item.children = filterPermissionRoutes(item.children, roles)
      }
      resRoutes.push(item)
    }
  })
  return resRoutes
}

const routePermission = {
  state: {
    routes: [],
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.routes = routes
    }
  },
  actions: {
    generateRoutes({ commit }, roles) {
      let accessedRoutes = filterPermissionRoutes(constantRouterMap, roles)
      commit('SET_ROUTES', accessedRoutes)
      return accessedRoutes
    }
  }
}

export default routePermission