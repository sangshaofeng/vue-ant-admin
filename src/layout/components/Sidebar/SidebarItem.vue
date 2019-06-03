<template>
  <a-sub-menu
    :key="item.name"
    v-bind="$props"
    v-on="$listeners"
    v-if="!item.meta.hidden && item.children"
  >
    <span slot="title">
      <a-icon :type="item.meta.icon" /><span>{{ item.meta.title }}</span>
    </span>
    <template v-for="child in item.children" v-if="!child.meta.hidden">
        <a-menu-item
          v-if="!child.children"
          :key="child.name"
          @click="toPath(child.path)"
        >
          <a-icon :type="child.meta.icon" />
          <span>{{ child.meta.title }}</span>
        </a-menu-item>
        <sub-menu
          v-else
          :key="child.name"
          :menu-info="child"
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
