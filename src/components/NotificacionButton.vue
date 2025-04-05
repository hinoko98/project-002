<script setup>
import notificacionIcon from '@/assets/icons/notificacion.svg' 

</script>

<template>
    <button class="relative">
      <img :src="notificacionIcon" alt="Notificación" class="w-6 h-6" />
      <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
    </button>
  </template>
  