import { createRouter, createWebHistory } from 'vue-router'
import ListProduk from '@/views/ListProduk.vue'
import DetailProduk from '@/views/DetailProduk.vue'

const routes = [
  {
    path: '/',
    name: 'listProduk',
    component: ListProduk
  },
  {
    path: '/detail/:id',
    name: 'detailProduk',
    component: DetailProduk
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
