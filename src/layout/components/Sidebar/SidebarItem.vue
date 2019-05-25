<template>
  <a-sub-menu
    :key="item.path"
    v-bind="$props"
    v-on="$listeners"
    v-if="!item.meta.hidden"
  >
    <span slot="title">
      <a-icon :type="item.meta.icon" /><span>{{ item.meta.title }}</span>
    </span>
    <template v-for="item in item.children">
        <a-menu-item
          v-if="!item.children"
          :key="item.path"
          @click="toPath(item.path)"
        >
          <a-icon :type="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <sub-menu
          v-else
          :key="item.path"
          :menu-info="item"
        />
    </template>
  </a-sub-menu>
</template>

<script>
import path from 'path'
import { Menu } from 'ant-design-vue'

export default {
  name: 'SubMenu',
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    item: {
      type: Object,
      default: ()=>({}),
    },
    basePath: {
      type: String,
      default: ''
    },
  },
  methods: {
    toPath(path) {
      let completePath = this.resolvePath(path)
      this.$router.push({path: completePath})
    },
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath)
    }
  }
};
</script>

<style lang="less" scoped>

</style>
