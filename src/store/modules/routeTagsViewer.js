const routeTagsViewer = {
  state: {
    visitedRoutes: []
  },
  mutations: {
    ADD_VISITED_ROUTE: (state, route) => {
      const isRouteExist = state.visitedRoutes.some(r => r.path === route.path)
      if (isRouteExist) return
      if (route.meta.hidden) return
      state.visitedRoutes.push(
        Object.assign({}, route, { title: route.meta.title || '未命名路由' })
      )
    },
    REMOVE_VISITED_ROUTE: (state, route) => {
      for (const [i, r] of state.visitedRoutes.entries()) {
        if (r.path === route.path) {
          state.visitedRoutes.splice(i, 1)
          break
        }
      }
    },
    UPDATE_VISITED_ROUTE: (state, route) => {
      for (let v of state.visitedRoutes) {
        if (v.path === route.path) {
          v = Object.assign(v, route)
          break
        }
      }
    }
  },
  actions: {
    addVisitedRoute(ctx, route) {
      ctx.commit('ADD_VISITED_ROUTE', route)
    },
    removeVisitedRoute(ctx, route) {
      ctx.commit('REMOVE_VISITED_ROUTE', route)
    },
    updateVisitedRoute(ctx, route) {
      ctx.commit('UPDATE_VISITED_ROUTE', route)
    }
  }
}

export default routeTagsViewer