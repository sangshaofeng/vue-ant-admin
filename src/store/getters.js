const getters = {
  username: state => state.user.username,
  roles: state => state.user.roles,
  avatar: state => state.user.avatar,
  sidebarCollapsed: state => state.app.sidebarCollapsed,
  permissionRoutes: state => state.routePermission.routes,
}

export default getters
