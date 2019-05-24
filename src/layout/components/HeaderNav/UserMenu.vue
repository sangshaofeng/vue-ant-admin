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
        <a href="javascript:;">1st menu item</a>
      </a-menu-item>
      <a-menu-item>
        <a href="javascript:;">2nd menu item</a>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item>
        <a href="javascript:;">3rd menu item</a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'username',
      'avatar'
    ])
  },
  created() {
    console.log(this.username)
  },
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
  font-size: 12px;
  .avatar {
    display: inline-block;
    margin: 0 8px 0 10px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
}
</style>