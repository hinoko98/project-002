import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SettingsView from '../views/SettingsView.vue'
import VentasView from '../views/VentasView.vue'
import ReportesView from '../views/ReportesView.vue'
import InventarioView from '../views/InventarioView.vue'
import AgregarProductoView from '@/views/inventario/AgregarProductoView.vue'
import AgregarCategoriaView from '@/views/inventario/AgregarCategoriaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'home' },
    },
    {
      path: '/ventas',
      name: 'ventas',
      component: VentasView,
      meta: { title: 'Ventas' },
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
      meta: { title: 'Ajustes' },
    },
    {
      path: '/reportes',
      name: 'reportes',
      component: ReportesView,
      meta: { title: 'Reportes' },
    },
    {
      path: '/inventario',
      name: 'inventario',
      component: InventarioView,
      meta: { title: 'Inventario' },
    },
    {
      path: '/inventario/agregarproducto',
      name: 'agregarproducto',
      component: AgregarProductoView,
      meta: { title: 'Agregar Nuevo Producto' },
    },
    {
      path: '/inventario/agregarcategoria',
      name: 'agregarcategoria',
      component: AgregarCategoriaView,
      meta: { title: 'Agregar Nueva Categoria' },
    },
   
  ],
})

export default router
