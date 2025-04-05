<script setup>
import { useRoute } from 'vue-router'


// Íconos
import homeIcon from '@/assets/icons/home.svg'
import ventasIcon from '@/assets/icons/ventas.svg'
import inventarioIcon from '@/assets/icons/inventario.svg'
import reportesIcon from '@/assets/icons/reportes.svg'
import settingsIcon from '@/assets/icons/settings.svg'
import menuOpenIcon from '@/assets/icons/menu-open.svg'
import menuCloseIcon from '@/assets/icons/menu-close.svg'
import avatarIcon from '@/assets/icons/user.svg'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['toggleMenu'])

const route = useRoute()

const menuItems = [
  { icon: homeIcon, label: 'Inicio', route: '/' },
  { icon: ventasIcon, label: 'Ventas', route: '/ventas' },
  { icon: inventarioIcon, label: 'Inventario', route: '/inventario' },
  { icon: reportesIcon, label: 'Reportes', route: '/reportes' },
  { icon: settingsIcon, label: 'Ajustes', route: '/settings' },
]

const userName = 'Joham Osorio'

const toggleMenu = () => {
  emit('toggleMenu')
}

</script>

<template>
  <!-- Menú lateral -->
  <aside
    class="fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 flex flex-col z-50"
    :class="{ 'w-64': props.isOpen, 'w-22': !props.isOpen }"
  >
    <!-- Encabezado con usuario -->
    <div class="relative flex items-center p-4 border-b">
      <div class="flex items-center gap-2">
        <img :src="avatarIcon" alt="Usuario" class="w-8 h-8 rounded-full" />
        <span v-if="isOpen" class="text-gray-800 font-semibold">{{ userName }}</span>
      </div>

      <!-- Botón de abrir/cerrar (fuera del menú) -->
      <button 
        @click="toggleMenu"
        class="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md transition hover:bg-gray-300"
      >
        <img :src="props.isOpen ? menuCloseIcon : menuOpenIcon" class="w-6 h-6" />
      </button>
    </div>

    <!-- Ítems del menú -->
    <ul class="p-4 space-y-3 flex-1">
      <li v-for="item in menuItems" :key="item.label">
        <router-link
          :to="item.route"
          class="flex items-center gap-3 p-3 rounded-lg transition hover:bg-blue-200"
          :class="{ 'bg-blue-500 text-white': route.path === item.route, 'text-gray-800': route.path !== item.route }"
          @click="closeMenu"
        >
          <img :src="item.icon" :alt="item.label" class="w-8 h-8" />
          <span v-if="isOpen">{{ item.label }}</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>
