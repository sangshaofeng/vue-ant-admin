<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-icon
      class="trigger"
      :type="sidebarCollapsed ? 'menu-unfold' : 'menu-fold'"
      @click="toggleSidebarCollapsed"
    />
  </a-layout-header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
     collapsed: false,
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
  line-height: 50px;
}
.trigger {
  cursor: pointer;
}
</style>
