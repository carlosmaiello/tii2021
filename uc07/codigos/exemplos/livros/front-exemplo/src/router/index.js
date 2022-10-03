import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../layouts/AuthLayout.vue'
import MainLayout from '../layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/usuarios/LoginView.vue')
        }
      ]
    },
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'livros',
          component: () => import('../views/livros/ListView.vue')
        },
        {
          path: 'livros/new',
          name: 'livros_new',
          component: () => import('../views/livros/FormView.vue')
        },
        {
          path: 'livros/:id',
          name: 'livros_update',
          component: () => import('../views/livros/FormView.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        }
      ]
    },

  ]
})

export default router
