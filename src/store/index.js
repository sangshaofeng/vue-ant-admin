import Vue from "vue"
import Vuex from "vuex"
import getters from "./getters"
import app from "./modules/app"
import routePermission from './modules/routePermission'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    app,
    routePermission
  },
  getters,
})

export default store
