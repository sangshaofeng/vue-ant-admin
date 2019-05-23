<template>
  <div class="login-wrapper">
    <a-button type="primary" @click="setCookie">登录</a-button>
  </div>
</template>

<script>
import cookie from 'js-cookie'

export default {
  methods: {
    setCookie() {
      cookie.set('SESSIONID', 'user_test_session_id')
      this.$router.push({ path: '/dashboard' })
    },
  }
}
</script>

<style lang="less" scoped>
.login-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
</style>