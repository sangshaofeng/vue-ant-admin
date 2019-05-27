import Layout from '@/layout'

const manualRoutes = {
  path: '/manual',
  component: Layout,
  redirect: '/manual/introduce',
  name: 'Manual',
  meta: {
    title: '使用手册',
    icon: 'read',
  },
  children: [
    {
      path: 'introduce',
      name: 'Introduce',
      component: () => import('@/pages/manual/Introduce'),
      meta: {
        keepAlive: true,
        title: '介绍',
        roles: ['introduce']
      },
    },
    {
      path: 'routerSetting',
      name: 'RouterSetting',
      component: () => import('@/pages/manual/RouterSetting'),
      meta: {
        keepAlive: true,
        title: '路由',
        roles: ['routerSetting']
      },
    },
  ]
}

export default manualRoutes