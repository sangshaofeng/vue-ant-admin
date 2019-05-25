import Vue from "vue"
import Vuex from "vuex"
import getters from "./getters"
import app from "./modules/app"
import routeTagsViewer from './modules/routeTagsViewer'
import routePermission from './modules/routePermission'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    app,
    routeTagsViewer,
    routePermission,
    user
  },
  getters,
})

export default store
