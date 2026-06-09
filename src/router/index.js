import { createRouter, createWebHistory } from 'vue-router'
import PainelCarrinho from '@/components/PainelCarrinho.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/carrinho',
      name: 'carrinho',
      component: PainelCarrinho,
    },
  ],
})

export default router
