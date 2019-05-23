import Vue from 'vue'
import Router from 'vue-router'
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

router.beforeEach((to, from, next) => {
  console.log(to)
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
