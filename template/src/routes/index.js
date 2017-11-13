export default [
  /**
   * Global paths
   */
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '*',
    redirect: '/404',
  },

  /**
   * Login page
   */
  {
    path: '/404',
    name: 'not-found',
    component: resolve => require(['@/pages/errors/404.vue'], resolve),
  },

  /**
   * Login page
   */
  {
    path: '/login',
    name: 'auth.login',
    component: resolve => require(['@/pages/auth/login.vue'], resolve),
    meta: {
      guest: true,
    },
  },

  /**
   * Dashboard page
   */
  {
    path: '/dashboard',
    name: 'dashboard.index',
    component: resolve => require(['@/pages/dashboard/index.vue'], resolve),
    meta: {
      auth: true,
    },
  },
];
