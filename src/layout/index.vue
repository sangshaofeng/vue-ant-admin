<template>
  <a-layout class="layout-container" style="min-height: 100vh">
    <sidebar></sidebar>
    <a-layout :style="{ marginLeft: '200px' }">
      <navbar></navbar>
      <app-main></app-main>
    </a-layout>
  </a-layout>
</template>

<script>
import AppMain from './components/AppMain'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

export default {
  components: {
    AppMain, Sidebar, Navbar
  }
}
</script>

<style lang="less" scoped>

</style>
