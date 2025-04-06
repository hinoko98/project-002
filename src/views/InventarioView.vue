<script setup>
import { ref, onMounted } from 'vue'

// Variables reactivas
const productos = ref([])
const categorias = ref([])
const filtroCategoria = ref('')
const buscarTexto = ref('')

// Simular carga inicial de datos (temporal)
onMounted(() => {
  productos.value = [
    { id: 1, nombre: 'Producto A', categoria: 'Lácteos' },
    { id: 2, nombre: 'Producto B', categoria: 'Carnes' }
  ]

  categorias.value = ['Todos', 'Lácteos', 'Carnes']
})
</script>

<template>
  <div class="p-4 space-y-4">
    <div class="flex justify-between items-center gap-4 flex-wrap">
      <div class="flex items-center gap-2">
        <input
          v-model="buscarTexto"
          type="text"
          placeholder="Buscar producto..."
          class="px-4 py-2 border rounded-md focus:outline-none"
        />
        <button class="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700">
          🔍
        </button>
      </div>

      <select v-model="filtroCategoria" class="border px-4 py-2 rounded-md">
        <option disabled value="">Filtrar por categoría</option>
        <option v-for="cat in categorias" :key="cat" :value="cat">{{ cat }}</option>
      </select>

      <button class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
        ➕ Agregar producto
      </button>
    </div>

    <div class="mt-4">
      <h2 class="text-lg font-semibold">Lista de productos</h2>
      <ul class="space-y-2 mt-2">
        <li
          v-for="prod in productos"
          :key="prod.id"
          class="border rounded-md p-3 bg-white shadow-sm"
        >
          {{ prod.nombre }} — {{ prod.categoria }}
        </li>
      </ul>
    </div>
  </div>
</template>
