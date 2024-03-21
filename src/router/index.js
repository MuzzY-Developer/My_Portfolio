import { createRouter, createWebHistory } from 'vue-router'
import homepages from "@/components/Pages/Homepages.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:homepages
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/components/Pages/Aboutpages.vue')
    },
    {
      path: '/myproject',
      name: 'myproject',
      component: () => import('@/Myprojectpages.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/components/Pages/Contactpages.vue')
    },
  ]
})

export default router
