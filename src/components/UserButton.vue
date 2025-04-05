<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import avatarIcon from '@/assets/icons/user.svg'

const mostrarOpciones = ref(false)
const userMenuRef = ref(null)

const toggleOpciones = () => {
  mostrarOpciones.value = !mostrarOpciones.value
}

// Cerrar si se hace clic fuera del menú
const handleClickOutside = (event) => {
  if (userMenuRef.value && !userMenuRef.value.contains(event.target)) {
    mostrarOpciones.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

// Acciones simuladas
const cambiarNombre = () => console.log('Cambiar nombre')
const cerrarSesion = () => console.log('Cerrar sesión')
</script>

<template>
  <div ref="userMenuRef" class="relative">
    <!-- Botón -->
    <button
      @click="toggleOpciones"
      class="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-full transition"
    >
      <img :src="avatarIcon" alt="Usuario" class="w-8 h-8 rounded-full" />
    </button>

    <!-- Dropdown -->
    <div
      v-if="mostrarOpciones"
      class="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border z-50"
    >
      <ul class="py-2 text-gray-700 text-sm">
        <li @click="cambiarNombre" class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          Cambiar nombre
        </li>
        <li @click="cerrarSesion" class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          Cerrar sesión
        </li>
      </ul>
    </div>
  </div>
</template>
