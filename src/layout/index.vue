<template>
  <a-layout class="layout-container" style="min-height: 100vh">
    <sidebar></sidebar>
    <a-layout class="right-body"
      :class="bindClass">
      <navbar></navbar>
      <app-main></app-main>
    </a-layout>
  </a-layout>
</template>

<script>
import { mapState } from 'vuex'
import AppMain from './components/AppMain'
import Sidebar from './components/Sidebar'
import Navbar from './components/HeaderNav/Navbar'

export default {
  components: {
    AppMain, Sidebar, Navbar
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
</style>
