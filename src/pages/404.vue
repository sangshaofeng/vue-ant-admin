<template>
  <div class="wrapper">
    <p>404
      <span>Not Found</span>
    </p>
    <router-link to="/">
      <a-button type="primary" block="true">返回首页</a-button>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  padding-bottom: 80px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  p {
    margin-bottom: 30px;
    font-size: 150px;
    font-weight: bold;
    span {
      font-size: 14px;
    }
  }
}
</style>
