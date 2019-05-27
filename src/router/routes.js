import Layout from '@/layout'
import manualRoutes from './modules/manual'

const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: "Dashboard",
    meta: {
      title: "Dashboard",
      icon: 'pie-chart',
      hidden: false
    },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard/index'),
        name: "Dashboard",
        meta: {
          keepAlive: true,
          affix: true,
          title: "Dashboard",
          roles: ["dashboard"],
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login'),
    meta: {
      title: '',
      hidden: true
    }
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
  manualRoutes,
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
