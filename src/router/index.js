import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: "dashboard",
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard/index'),
        name: "dashboard",
        meta: {
          title: "首页",
        }
      }
    ]
  },
]

export default new Router({
  mode: 'history',
  base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})