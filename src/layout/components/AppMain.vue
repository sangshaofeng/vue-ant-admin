<template>
  <a-layout-content :style="{ margin: '20px', minHeight: '280px' }">
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
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}
.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
