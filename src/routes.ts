import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./pages/Home.vue'),
  },
  {
    path: '/convert',
    component: () => import('./pages/Convert.vue'),
  },
]

export default routes
