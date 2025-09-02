export default [
  {
    path: '/login',
    layout: '/BasicLayout',
    component: '/user/pages/Login',
  },
  {
    path: '/403',
    component: '/system/pages/403',
  },
  {
    path: '/500',
    component: '/system/pages/500',
  },
  {
    path: '/*',
    component: '/system/pages/404',
  },
]
