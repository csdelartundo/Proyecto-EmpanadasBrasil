import { createRouter, createWebHistory } from 'vue-router'
import ProductosView from '@/views/ProductosView.vue'
import OrigenView from '@/views/OrigenView.vue'
import ContactoView from '@/views/ContactoView.vue'
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
    component: ProductosView,
  },
  {
    path: '/origen',
    name: 'origen',
    component: OrigenView,
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
