<template>
  <a-layout-header style="background: #fff; padding: 0">
    <div class="header-wrapper">
      <div class="menu-left">
        <a-icon
          class="trigger"
          :type="sidebarCollapsed ? 'menu-unfold' : 'menu-fold'"
          @click="toggleSidebarCollapsed"
        />
      </div>
      <div class="menu-right">
        <UserMenu></UserMenu>
      </div>
    </div>
    <RouteTagsViewer v-if="showRouteTagsViewer"></RouteTagsViewer>
  </a-layout-header>
</template>

<script>
import { mapState } from 'vuex'
import UserMenu from './UserMenu'
import RouteTagsViewer from './RouteTagsViewer'
import appConfig from '@/app.config'

export default {
  components: {
    UserMenu, RouteTagsViewer
  },
  data() {
    return {
     collapsed: false,
     showRouteTagsViewer: appConfig.showRouteTagsViewer
    }
  },
  computed: {
    ...mapState({
      sidebarCollapsed: state => state.app.sidebarCollapsed
    })
  },
  methods: {
    toggleSidebarCollapsed() {
      this.$store.dispatch('toggleSidebar')
    }
  }
}
</script>

<style lang="less" scoped>
.ant-layout-header {
  height: 50px;
  padding: 0 20px;
  line-height: 50px;
  .header-wrapper {
    width: 100%;
    text-align: left;
    padding: 0 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
}
.trigger {
  cursor: pointer;
}
</style>
