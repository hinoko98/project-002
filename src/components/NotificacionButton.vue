<script setup>
import notificacionIcon from '@/assets/icons/notificacion.svg' 

</script>

<template>
<!-- Botón de notificaciones -->
    <button class="relative">
    <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2"
        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
    <!-- Circulito de notificación -->
    <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
    </button>
</template>