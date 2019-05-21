<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="()=> collapsed = !collapsed"
    />
  </a-layout-header>
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

<style lang="scss" scoped>

</style>