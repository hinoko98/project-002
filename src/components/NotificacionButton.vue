<script setup>
import { ref, onMounted, onBeforeUnmount, computed  } from 'vue'
import { notifications } from '@/composables/notificacions.js'
import notificacionIcon from '@/assets/icons/notificacion.svg'

const mostrarDropdown = ref(false)
const notiMenuRef  = ref(null)
const toggleDropdown = () => (
  mostrarDropdown.value = !mostrarDropdown.value
)

// Cerrar si se hace clic fuera del menú
const handleClickOutside = (event) => {
  if (notiMenuRef .value && !notiMenuRef .value.contains(event.target)) {
    mostrarDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

// Notificaciones no leídas
const unreadCount = computed(() => notifications.list.filter(n => !n.read).length)



const markAllAsRead = () => {
  notifications.list.forEach(n => n.read = true)
}
</script>

<template>
  <div ref="notiMenuRef" class="relative">
    <button
      @click="toggleDropdown"
      class="relative hover:bg-gray-100 rounded-full transition"
    >
      <img :src="notificacionIcon" alt="Notificación" class="w-8 h-8" />
      <!-- Si hay nuevas -->
      <span
        v-if="unreadCount > 0"
        class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping"
      ></span>
      <span
        v-if="unreadCount > 0"
        class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"
      ></span>
    </button>

    <div
      v-if="mostrarDropdown"
      class="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border z-50"
    >
      <div class="p-4 border-b font-semibold text-gray-700 flex justify-between">
        <span>Notificaciones</span>
        <button @click="markAllAsRead" class="text-xs text-blue-500 hover:underline">Marcar como leídas</button>
      </div>
      <ul class="divide-y max-h-64 overflow-y-auto">
        <li
          v-for="noti in notifications.list"
          :key="noti.id"
          class="p-4 hover:bg-gray-50 transition cursor-pointer"
        >
          <span v-if="noti.type === 'warning'" class="text-yellow-500">⚠️</span>
          <span v-else-if="noti.type === 'message'" class="text-blue-500">📩</span>
          <span v-else class="text-gray-500">🔔</span>
          {{ noti.message }}
        </li>
      </ul>
      <div class="p-2 text-center text-sm text-blue-500 hover:underline cursor-pointer">
        Ver todas
      </div>
    </div>
  </div>
</template>
