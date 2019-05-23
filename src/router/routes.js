import Layout from '@/layout'
import userCenter from "./modules/userCenter"

const constantRouterMap = [
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
  {
    path: '/404',
    name: "404",
    component: () => import('@/pages/404'),
    meta: {
      title: "404",
      hidden: true
    }
  },
  // 路由模块
  userCenter,
  {
    path: '*',
    name: "all",
    redirect: '/404',
    meta: {
      hidden: true
    }
  }
]

export default constantRouterMap
