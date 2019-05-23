<template>
  <a-layout-header style="background: #fff; padding: 0">
    <div class="header-wrapper">
      <a-icon
        class="trigger"
        :type="sidebarCollapsed ? 'menu-unfold' : 'menu-fold'"
        @click="toggleSidebarCollapsed"
      />
    </div>
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
  padding: 0 20px;
  line-height: 50px;
  .header-wrapper {
    width: 100%;
    text-align: left;
    padding: 0 20px;
  }
}
.trigger {
  cursor: pointer;
}
</style>
