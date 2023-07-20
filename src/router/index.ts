import { createRouter, createWebHistory } from 'vue-router'
import Base from '../views/Base.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Base
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
