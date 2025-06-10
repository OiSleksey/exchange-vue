import type { RouteRecordRaw } from 'vue-router'

// {
//   path: '/convert',
//     component: () => import('./pages/Convert.vue'),
// },
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./pages/Home.vue'),
  },
]

export default routes
