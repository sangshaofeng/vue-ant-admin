<template>
  <a-dropdown>
    <a class="ant-dropdown-link" href="#">
      {{ username }}
      <img v-if="avatar !== ''" class="avatar" :src="avatar"/>
      <img v-else class="avatar" src="@/assets/default_user_avatar.png" alt="">
      <a-icon type="down" />
    </a>
    <a-menu slot="overlay">
      <a-menu-item>
        <a href="javascript:;" style="font-size:13px;">首页</a>
      </a-menu-item>
      <a-menu-item>
        <a href="javascript:;" style="font-size:13px;">我的关注</a>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item @click="logout">
        <a href="javascript:;" style="font-size:13px;">登出账户</a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { mapGetters } from 'vuex'
import cookie from 'js-cookie'

export default {
  computed: {
    ...mapGetters([
      'username',
      'avatar'
    ])
  },
  methods: {
    logout() {
      cookie.remove('SESSIONID')
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style lang="less" scoped>
.ant-dropdown-link {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  color: #808080;
  text-decoration: none;
  font-size: 13px;
  .avatar {
    display: inline-block;
    margin: 0 8px 0 10px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
}
</style>