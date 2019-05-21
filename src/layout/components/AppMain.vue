<template>
  <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </a-layout-content>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.ant-layout-content {
  background: transparent !important;
}
</style>