<script setup>
</script>

<template>
  <div class="flex justify-end items-center h-full w-full">
    <div class="relative w-full max-w-sm flex">
      <!-- Input con ícono a la izquierda -->
      <div class="relative flex-grow">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.6 3.6a7.5 7.5 0 0013.05 13.05z">
            </path>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Buscar..."
          class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <!-- Botón de buscar con ícono -->
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r-lg transition duration-200 flex items-center justify-center"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.6 3.6a7.5 7.5 0 0013.05 13.05z">
          </path>
        </svg>
      </button>
    </div>
  </div>
</template>
