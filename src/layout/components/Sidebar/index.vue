<template>
  <a-layout-sider
    class="sidebar-wrapper"
    :class="bindClass"
    :trigger="null"
    :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    collapsible
    v-model="sidebarCollapsed"
  >
    <div class="sidebar-logo-container">
      <transition name="sidebarLogoFade">
        <router-link v-if="sidebarCollapsed" key="collapse" class="sidebar-logo-link" to="/">
          <img v-if="logo" :src="logo" class="sidebar-logo">
          <h1 v-else class="sidebar-title">{{ title }} </h1>
        </router-link>
        <router-link v-else key="expand" class="sidebar-logo-link" to="/">
          <img v-if="logo" :src="logo" class="sidebar-logo">
          <h1 class="sidebar-title">{{ title }} </h1>
        </router-link>
      </transition>
    </div>
    <a-menu
      :theme="theme"
      mode="inline"
      :selectedKeys="isActive"
    >
      <template v-for="route in permissionRoutes">
        <a-menu-item v-if="!route.children && !route.meta.hidden" :key="route.name">
          <a-icon :type="route.meta.icon" />
          <span>{{ route.meta.title }}</span>
        </a-menu-item>
        <sidebar-item
          v-else
          :item="route"
          :base-path="route.path"
          :key="route.path"
        />
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { mapState } from 'vuex'
import appConfig from '@/app.config'
import SidebarItem from './SidebarItem'

export default {
  components: {
    SidebarItem
  },
  data() {
    return {
      collapsed: false,
      theme: 'dark',
      config: appConfig,
      title: '管理系统',
      logo: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
    }
  },
  computed: {
    ...mapState({
      sidebarCollapsed: state => state.app.sidebarCollapsed,
      permissionRoutes: state => state.routePermission.routes
    }),
    bindClass() {
      return {
        themeWhite: this.theme === 'white'
      }
    },
    isOpen() {
      const pathArr = []
      const { path } = this.$route
      pathArr.push(path)
      return `"${pathArr}"`
    },
    isActive() {
      return this.$route.path
    }
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    },
  },
}
</script>

<style lang="less" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 2s;
}
.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-wrapper {
  height: 100%;
  text-align: left;
  .sidebar-logo-container {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    overflow: hidden;
    .sidebar-logo-link {
      display: inline-block;
      height: 100%;
      width: 100%;
      .sidebar-logo {
        width: 32px;
        height: 32px;
        vertical-align: middle;
      }
      .sidebar-title {
        display: inline-block;
        margin: 0 0 0 12px;
        color: #fff;
        font-weight: 600;
        line-height: 50px;
        font-size: 14px;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
        vertical-align: middle;
      }
      .collapse {
        .sidebar-logo {
          margin-right: 0px;
        }
      }
    }
  }
}

.themeWhite {
  border-right: 1px solid #e8e8e8;
  background: #fff;
  .ant-menu {
    border: none;
  }
  .logo {
    background: #fff;
  }
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
