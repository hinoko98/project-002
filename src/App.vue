<script setup>
import { ref } from 'vue'
import NavView from './components/NavView.vue'
import NotificacionButton from './components/NotificacionButton.vue'

const isOpen = ref(true)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="flex h-screen">
    <!-- Menú lateral -->
    <NavView :isOpen="isOpen" @toggleMenu="toggleMenu" />

    <!-- Contenedor del resto del contenido -->
    <div
      class="flex-1 flex flex-col transition-all duration-300 ease-in-out"
      :class="isOpen ? 'ml-64' : 'ml-22'"
    >
      <!-- Header -->
      <header class="h-16 bg-white shadow-md flex items-center justify-between px-4">
        <input
          type="text"
          placeholder="Buscar..."
          class="px-4 py-2 border rounded-lg focus:outline-none"
        />
        <div class="flex items-center gap-4">
          <NotificacionButton />
          <img src="https://i.pravatar.cc/32" class="rounded-full" />
        </div>
      </header>

      <!-- Contenido principal -->
      <main class="flex-1 bg-gray-100 p-4 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>
