const ls = localStorage

const app = {
  state: {
    sidebarCollapsed: ls.getItem('sidebarStatus') ? !!+ls.getItem('sidebarStatus') : true
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sidebarCollapsed = !state.sidebarCollapsed
      if (state.sidebarCollapsed) {
        ls.setItem('sidebarStatus', 1)
      } else {
        ls.setItem('sidebarStatus', 0)
      }
    }
  },
  actions: {
    toggleSidebar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    }
  }
}

export default app
