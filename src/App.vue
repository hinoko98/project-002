<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import NavView from './components/NavView.vue'
import NotificacionButton from './components/NotificacionButton.vue'
import UserButton from './components/UserButton.vue'
import BuscarButton from './components/BuscarButon.vue'

const isOpen = ref(true)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const route = useRoute()
const pageTitle = computed(() => route.meta.title || '')
</script>

<template>
  <div class="flex h-screen">
    <!-- Menú lateral -->
    <NavView :isOpen="isOpen" />

    <!-- Contenedor del resto del contenido -->
    <div
      class="flex-1 flex flex-col transition-all duration-300 ease-in-out"
      :class="isOpen ? 'ml-64' : 'ml-20'"
    >
      <!-- Header -->
      <header class="h-20 bg-white shadow-md flex items-center justify-between px-4">
        <!-- Izquierda: botón hamburguesa + título -->
        <div class="flex items-center gap-4">
          <!-- Botón menú hamburguesa -->
          <button @click="toggleMenu" class="text-gray-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 transition-transform duration-300"
              :class="{ 'rotate-90': isOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <!-- Título de la página -->
          <h1 class="text-xl font-semibold text-gray-700">{{ pageTitle }}</h1>
        </div>
        <div class="flex items-center justify-left gap-4">
          <BuscarButton />
        </div>
        <!-- Derecha: buscar, notificación y usuario -->
        <div class="flex items-center gap-4">
          <NotificacionButton />
          <UserButton />
        </div>
      </header>

      <!-- Contenido principal -->
      <main class="flex-1 bg-gray-100 p-4 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>

  <footer>
    <small class="mt-10 text-black">
      <h1 class="text-lg font-semibold">Contador en Vue</h1>
      <p>Desarrollado por Joham Osorio</p>
    </small>
  </footer>
</template>
