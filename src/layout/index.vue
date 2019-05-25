<template>
  <a-layout 
    class="layout-container" 
    :class="{ 'sidebar-collapsed': sidebarCollapsed }" 
    style="min-height: 100vh">
    <sidebar></sidebar>
    <a-layout class="right-body"
      :class="bindClass">
      <navbar :class="{'fixed-header': fixedHeader}"></navbar>
      <app-main class="app-main-container"></app-main>
    </a-layout>
  </a-layout>
</template>

<script>
import { mapState } from 'vuex'
import AppMain from './components/AppMain'
import Sidebar from './components/Sidebar'
import Navbar from './components/HeaderNav'
import appConfig from '@/app.config'

export default {
  components: {
    AppMain, Sidebar, Navbar
  },
  data () {
    return {
      fixedHeader: appConfig.fixedHeader
    }
  },
  mounted () {
    console.log(appConfig)
    console.log(this.fixedHeader)
  },
  computed: {
    ...mapState({
      sidebarCollapsed: state => state.app.sidebarCollapsed
    }),
    bindClass() {
      return {
        marginLeft200: !this.sidebarCollapsed,
        marginLeft80: this.sidebarCollapsed
      }
    }
  },
}
</script>

<style lang="less" scoped>
.right-body {
  box-sizing: border-box;
  overflow-x: hidden;
  min-width: 500px;
  transition: all .2s;
}
.marginLeft200 {
  margin-left: 200px;
}
.marginLeft80 {
  margin-left: 80px;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - 200px);
  transition: width 0.2s;
}

.sidebar-collapsed .fixed-header {
  width: calc(100% - 80px);
}
.fixed-header + .app-main-container {
  margin-top: 70px;
}
</style>
