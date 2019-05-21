import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

import userCenter from "./modules/userCenter"

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: "dashboard",
    hidden: true,
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
  userCenter,
]

export default new Router({
  mode: 'history',
  base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})