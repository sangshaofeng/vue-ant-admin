<template>
  <a-layout-sider
    class="sidebar-wrapper"
    :trigger="null"
    :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    collapsible
    v-model="collapsed"
  >
    <div class="logo" />
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
      <a-menu-item key="1">
        <a-icon type="user" />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="video-camera" />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="upload" />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    }
  }
}
</script>

<style lang="less" scoped>
.sidebar-wrapper {
  height: 100%;
  background: #fff;
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
