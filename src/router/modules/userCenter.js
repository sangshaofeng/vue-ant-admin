import Layout from '@/layout'

const  userCenterRoutes = {
  path: '/userCenter',
  component: Layout,
  // redirect: '/userCenter/basicInfo',
  name: 'UserCenter',
  meta: {
    title: '用户中心',
    icon: 'user',
  },
  children: [
    {
      path: 'basicInfo',
      name: 'BasicInfo',
      component: () => import('@/pages/userCenter/BasicInfo'),
      meta: {
        keepAlive: true,
        title: '基本信息',
        roles: ["user_basic_info"]
      },
    },
    {
      path: 'changePassword',
      name: 'ChangePassword',
      component: () => import('@/pages/userCenter/ChangePassword'),
      meta: {
        keepAlive: true, 
        title: '修改密码',
        roles: ["change_password"]
      }
    },
  ]
}

export default userCenterRoutes
