<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Variables reactivas
const productos = ref([])
const categorias = ref([])
const filtroCategoria = ref('')
const buscarTexto = ref('')

// Simular carga inicial de datos (temporal)
onMounted(() => {
  axios.get('http://localhost:3000/api/productos')
  .then(res => productos.value = res.data)
  axios.get('http://localhost:3000/api/productos/categorias')
  .then(res => categorias.value = ['Todos', ...res.data.map(c => c.nombreCategoria)])
  
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

      <router-link to="/inventario/agregarproducto" class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
        ➕ Agregar producto
      </router-link>
    </div>

    
    <div class="mt-4">
      <h2 class="text-lg font-semibold">Lista de productos</h2>
      <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead class="bg-gray-100 text-gray-700 text-left">
          <tr>
            <th class="px-4 py-3 border-b">ID</th>
            <th class="px-4 py-3 border-b">Codigo de Barra</th>
            <th class="px-4 py-3 border-b">Categoria</th>
            <th class="px-4 py-3 border-b">Descripcion producto</th>
            <th class="px-4 py-3 border-b">Cantidad</th>
            <th class="px-4 py-3 border-b">Precio Inicial</th>
            <th class="px-4 py-3 border-b">Precio Final</th>
            <th class="px-4 py-3 border-b">Fecha de registro</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="producto in productos"
            :key="producto.id"
            class="hover:bg-blue-50 transition"
          >
            <td class="px-4 py-3 border-b">{{ producto.id }}</td>
            <td class="px-4 py-3 border-b">{{ producto.codigo  }}</td>
            <td class="px-4 py-3 border-b">{{ producto.categoria }}</td>
            <td class="px-4 py-3 border-b">{{ producto.nombre }}</td>
            <td class="px-4 py-3 border-b">{{ producto.cantidad }}</td>
            <td class="px-4 py-3 border-b">${{ producto.precioinical.toLocaleString() }}</td>
            <td class="px-4 py-3 border-b">${{ producto.preciofinal.toLocaleString() }}</td>
            <td class="px-4 py-3 border-b">${{ new Date().toLocaleDateString() }}</td>
            
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
