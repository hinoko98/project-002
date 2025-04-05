<script setup>

</script>

<template>
  <section class="bg-blue py-10 dark:bg-dark">
    <div class="flex items-center flex-col p-5">
      <h1 class="text-black text-2xl font-bold">Mi agenda - Lista de contactos</h1>
      <div class="mt-4 flex gap-2">
        <input type="text" class="border-2 hover:bg-cyan-200 py-3 px-7 rounded-lg" placeholder="Buscar..." />
        <button
          @click="console.log('Buscando contacto...')"
          class="bg-blue-500 text-black rounded-lg px-6 py-3 hover:bg-blue-600"
        >
          Buscar
        </button>
      </div>
      <small class="mt-5 text-black">
        <h1 class="text-lg font-semibold">Contador en Vue</h1>
        <p>Desarrollado por Joham Osorio</p>
      </small>
    </div>
  </section>
</template>
