import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PolicyView from '../views/PolicyView.vue'
import RulesView from '../views/RulesView.vue'
import OfferView from '../views/OfferView.vue'
import Tr from "@/i18n/translation"

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: "/:locale?",
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'about',
          name: 'about',
          component: AboutView
        },
        {
          path: 'policy',
          name: 'policy',
          component: PolicyView
        },
        {
          path: 'rules',
          name: 'rules',
          component: RulesView
        },
        {
          path: 'offer',
          name: 'offer',
          component: OfferView
        }
      ]
    }
  ]
})

export default router