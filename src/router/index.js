import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import cookie from 'js-cookie'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import routes from './routes'

Vue.use(Router)

// 关闭spinner
NProgress.configure({ showSpinner: false })

const router = new Router({
  mode: 'history',
  base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

// 路由白名单，所有人均可访问
const routeWhiteList = ["/login"]

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  const sessionId = cookie.get('SESSIONID')
  if (sessionId) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          // dispatch返回一个Promise, 由于是异步的，所以使用await
          const { roles } = await store.dispatch('setUserInfo')
          const accessRoutes = await store.dispatch('generateRoutes', roles)
          router.addRoutes(accessRoutes)
          next({ ...to, replace: true })
        } catch (error) {
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    if (routeWhiteList.indexOf(to.path) !== -1) next()
    else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
