
import { createRouter, createWebHistory } from 'vue-router'
import chat from '../components/chat.vue';
import login from '../components/login.vue';
import registry from '../components/registry.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:chat
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/registry',
      component:registry
    }
  ]
})

export default router
