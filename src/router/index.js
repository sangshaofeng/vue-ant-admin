import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Layout from '@/layout'
import userCenter from "./modules/userCenter"

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: "dashboard",
    meta: {
      title: "Dashboard",
      icon: 'pie-chart',
      hidden: false
    },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard/index'),
        name: "dashboard",
        meta: {
          title: "Dashboard",
          roles: [""],
        }
      }
    ]
  },
  userCenter,
]

const router = new Router({
  mode: 'history',
  base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
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
