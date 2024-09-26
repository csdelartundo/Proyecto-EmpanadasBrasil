import { createRouter, createWebHistory } from 'vue-router'
import HeroSection from '@/components/HeroSection.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HeroSection,
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import('../views/ProductosView.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
