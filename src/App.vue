<script setup>
import { ref } from 'vue'
import NavView from './components/NavView.vue'
import NotificacionButton from './components/NotificacionButton.vue'
import UserButton from './components/UserButton.vue'
import BuscarButton from './components/BuscarButon.vue'

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
      <header class="h-16 bg-white shadow-md flex items-center justify-between px-2">
        <BuscarButton/>
        <div class="flex items-center gap-4">
          <NotificacionButton />
          <UserButton/>
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
