import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue') // lazy-load
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import('../components/Characters/Characters.vue')
  },

]

const router = createRouter({
  history: createWebHistory(), // HTML5 history (temiz URL)
  routes
})

export default router