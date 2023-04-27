import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'swiper',
          name: 'swiper',
          component: () => import('../components/mySwiper.vue')
        },
        {
          path: 'test',
          name: 'test',
          component: () => import('../components/myTest.vue')
        }
      ]
    }
  ]
})

export default router
