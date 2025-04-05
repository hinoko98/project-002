import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SettingsView from '../views/SettingsView.vue'
import VentasView from '../views/VentasView.vue'
import ReportesView from '../views/ReportesView.vue'
import InventarioView from '../views/InventarioView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ventas',
      name: 'ventas',
      component: VentasView,
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
    },
    {
      path: '/reportes',
      name: 'reportes',
      component: ReportesView,
    },
    {
      path: '/inventario',
      name: 'inventario',
      component: InventarioView,
    },
   
  ],
})

export default router
