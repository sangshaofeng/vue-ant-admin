const routeTagsViewer = {
  state: {
    visitedRoutes: [],
    cachedViews: [],
  },
  mutations: {
    ADD_VISITED_ROUTE: (state, route) => {
      const isRouteExist = state.visitedRoutes.some(r => r.path === route.path)
      if (isRouteExist) return
      if (route.meta.hidden) return
      state.visitedRoutes.push(
        Object.assign({}, route, { title: route.meta.title || 'no-name' })
      )
    },

    ADD_CACHED_VIEW: (state, view) => {
      if (state.cachedViews.includes(view.name)) return
      state.cachedViews.push(view.name)
    },

    REMOVE_VISITED_ROUTE: (state, route) => {
      for (const [i, r] of state.visitedRoutes.entries()) {
        if (r.path === route.path) {
          state.visitedRoutes.splice(i, 1)
          break
        }
      }
    },

    REMOVE_CACHED_VIEW: (state, view) => {
      for (const name of state.cachedViews) {
        if (name ===  view.name) {
          const index = state.cachedViews.indexOf(name)
          state.cachedViews.splice(index, 1)
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
    addView({ dispatch }, view) {
      dispatch('addVisitedRoute', view)
      dispatch('addCachedView', view)
    },

    addVisitedRoute(ctx, route) {
      ctx.commit('ADD_VISITED_ROUTE', route)
    },

    addCachedView({ commit }, view) {
      commit('ADD_CACHED_VIEW', view)
    },

    removeView({ dispatch, state }, view) {
      return new Promise(resolve => {
        dispatch('removeVisitedRoute', view)
        dispatch('removeCachedView', view)
        resolve({
          visitedRoutes: [...state.visitedRoutes],
          cachedViews: [...state.cachedViews]
        })
      })
    },

    removeVisitedRoute(ctx, route) {
      return new Promise(resolve => {
        ctx.commit('REMOVE_VISITED_ROUTE', route)
        resolve([...ctx.state.visitedRoutes])
      })
    },

    removeCachedView(ctx, view) {
      return new Promise(resolve => {
        ctx.commit('REMOVE_CACHED_VIEW', view)
        resolve([...ctx.state.cachedViews])
      })
    },

    updateVisitedRoute(ctx, route) {
      ctx.commit('UPDATE_VISITED_ROUTE', route)
    }
  }
}

export default routeTagsViewer