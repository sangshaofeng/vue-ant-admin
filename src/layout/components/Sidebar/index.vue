<template>
    <a-layout-sider
      class="sidebar-wrapper"
      :trigger="null"
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
      collapsible
      v-model="collapsed"
    >
      <div class="logo">
        <img src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png" alt="">
        <transition name="fade" mode="out-in">
          <h3 v-if="!collapsed">管理系统</h3>
        </transition>
      </div>
      <a-menu 
        theme="dark" 
        mode="inline"
      >
      <template v-for="route in routes">
        <a-menu-item v-if="!route.children" :key="route.key">
          <a-icon :type="route.icon" />
          <span>{{ route.title }}</span>
        </a-menu-item>
        <sidebar-item v-else :menu-info="route" :key="route.key"/>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { constantRouterMap } from '@/router'
import SidebarItem from './SidebarItem'

export default {
  components: {
    SidebarItem
  },
  data() {
    return {
      collapsed: false,
      routes: [],
    }
  },
  mounted() {
    console.log(constantRouterMap)
    this.routes = constantRouterMap
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    },
  },
}
</script>

<style lang="less" scoped>
.logo {
  height: 64px;
  background: #222938;
  line-height: 64px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  h3 {
    color: #fff;
    margin: 0 10px;
    display: inline-block;
    font-size: 15px;
  }
  img {
    width: 40px;
  }
}
.sidebar-wrapper {
  height: 100%;
  text-align: left;
}
.sidebar-wrapper::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background-color: #eee;
}
.sidebar-wrapper::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #fff;
}
.sidebar-wrapper::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #eee;
}
</style>
