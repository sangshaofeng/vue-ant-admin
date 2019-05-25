export const mockUser = {
  username: "测试人员",
  roles: ['dashboard', 'user_basic_info', 'change_password'],
  avatar: "https://zlfzb.kungeek.com/bitbucket/users/sangshaofeng/avatar.png?s=48&v=1558691789000",

  // 实际开发中如果响应报文中携带了cookie，并且setCookie为true，sessionid会自动写入cookie中，所以不用存入store中
  sessionid: "user_test_session_id"
}
