<!-- 路由标签导航器 -->
<template>
  <div class="tags-view-wrapper">
    <router-link
      v-for="route in visitedRoutes"
      :to="{ path: route.path, query: route.query, fullPath: route.fullPath }"
      :key="route.path"
      ref="tag"
      :class="isActive(route) ? 'active' : ''"
      class="tags-view-item">
      <span>{{ route.meta.title }}</span>
      <a-icon 
        v-if="!route.meta.affix" 
        class="close-icon" 
        type="close-circle"
        @click.prevent.stop="removeTag(route)" />
    </router-link>
  </div>
</template>

<script>
import path from 'path'

export default {
  computed: {
    visitedRoutes() {
      return this.$store.state.routeTagsViewer.visitedRoutes
    },
    permissionRoutes() {
      return this.$store.state.routePermission.routes
    }
  },
  watch: {
    $route() {
      this.addTag()
    }
  },
  mounted() {
    this.initTags()
    this.addTag()
  },
  methods: {
    initTags() {
      const affixTags = this.affixTags = this.filterAffixTags(this.permissionRoutes)
      for (const tag of affixTags) {
        if (tag.name) {
          this.$store.dispatch('addVisitedRoute', tag)
        }
      }
    },
    addTag() {
      if (this.$route.name) {
        this.$store.dispatch('addView', this.$route)
      }
      return false
    },
    removeTag(route) {
      this.$store.dispatch('removeView', route).then(() => {
        if (this.isActive(route)) {
          this.toLastRoute(this.visitedRoutes, route)
        }
      })
    },
    isActive(route) {
      return route.path === this.$route.path
    },
    toLastRoute(visitedRoutes, route) {
      const latestView = visitedRoutes.slice(-1)[0]
      if (latestView) {
        this.$router.push(latestView)
      } else {
        if (route.name === 'Dashboard') {
          this.$router.replace({ path: '/redirect' + route.fullPath })
        } else {
          this.$router.push('/')
        }
      }
    },
    filterAffixTags(routes, basePath = '/') {
      let tags = []
      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path)
          tags.push({ fullPath: tagPath, path: tagPath, name: route.name, meta: { ...route.meta }})
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path)
          if (tempTags.length >= 1) { tags = [...tags, ...tempTags] }
        }
      })
      return tags
    },
  }
}
</script>

<style lang="less" scoped>
.tags-view-wrapper {
  text-align: left;
  width: 100%;
  height: 38px;
  padding: 0 20px;
  background: #fff;
  border-top: 1px solid #eee;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  .tags-view-item {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 24px;
    border-radius: 5px;
    border: 1px solid #eee;
    // box-shadow: 0px 0px 8px -6px rgba(0, 64, 128, 0.9);
    color: #495060;
    background: #fff;
    padding: 0 8px;
    margin: 0 8px 0 0;
    font-size: 12px;
    text-decoration: none;
    .close-icon {
      color: rgb(182, 182, 182);
      margin: 2px 0 0 8px;
      display: inline-block;
      &:hover {
        color: rgb(99, 99, 99);
      }
    }
    &.active {
      border: 1px solid #4fc08d;
      background: #4fc08d;
      color: #fff;
    }
    &.active > .close-icon {
      color: #fff;
      &.hover {
        color: rgb(99, 99, 99);
      }
    }
  }
}
</style>