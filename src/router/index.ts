import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BoycottView from '../views/BoycottView.vue'
import BarcodeView from '@/views/BarcodeView.vue'
import BarcodeResultView from '@/views/BarcodeResultView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/boycott/:id',
      name: 'boycott',
      component: BoycottView
    },
    {
      path: '/scan',
      name: 'scan',
      component: BarcodeView
    },
    {
      path: '/scan-result',
      name: 'scan_result',
      component: BarcodeResultView
    }
  ]
})

export default router
