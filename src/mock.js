export const mockUser = {
  username: "user_test",
  roles: ['dashboard', 'user_basic_info', 'change_password'],
  avatar: "https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png",

  // 实际开发中如果响应报文中携带了cookie，并且setCookie为true，sessionid会自动写入cookie中，所以不用存入store中
  sessionid: "user_test_session_id"
}
