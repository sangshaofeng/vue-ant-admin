import Layout from '@/layout'

const  userCenterRoutes = {
  path: '/userCenter',
  component: Layout,
  name: '',
  meta: {
    title: '用户中心',
    icon: 'user',
  },
  children: [
    {
      path: '/basicInfo',
      name: 'BasicInfo',
      component: () => import('@/pages/userCenter/basicInfo'),
      meta: { title: '基本信息' }
    },
    {
      path: '/changePassword',
      name: 'ChangePassword',
      component: () => import('@/pages/userCenter/changePassword'),
      meta: { title: '修改密码' }
    },
  ]
}

export default userCenterRoutes