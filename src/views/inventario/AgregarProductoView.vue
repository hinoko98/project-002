<!-- src/views/inventario/AgregarProductoView.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const nuevoProducto = ref({
  codigoBarraProducto: '',
  descripcionProducto: '',
  idCategoria: '',
  cantidadProducto: 0,
  precioCompraProducto: 0,
  precioVentaProducto: 0
})

const categorias = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/categorias')
    categorias.value = res.data
  } catch (error) {
    console.error('Error al cargar categorías', error)
  }
})

const guardarProducto = async () => {
  if (
    !nuevoProducto.value.codigoBarraProducto ||
    !nuevoProducto.value.descripcionProducto ||
    !nuevoProducto.value.idCategoria
  ) {
    alert('Por favor, completa todos los campos obligatorios.')
    return
  }

  try {
    await axios.post('http://localhost:3000/api/productos', nuevoProducto.value)
    alert('Producto guardado correctamente ✅')
    router.push('/inventario')
  } catch (error) {
    console.error('Error al guardar el producto:', error)
    alert('Error al guardar el producto ❌')
  }
}
</script>

<template>
  <div class="max-w-3xl mx-auto p-6">
    <div class="max-w-3xl mx-auto p-6">
      <h2 class="text-2xl font-bold mb-4">Agregar nuevo producto</h2>
      <router-link to="/inventario/agregarcategoria" class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
          ➕ Agregar Categoria
      </router-link>
    </div>
    
    <form @submit.prevent="guardarProducto" class="space-y-4 bg-white p-6 rounded-lg shadow">

      <label class="block">Código de barras</label>
      <input v-model="nuevoProducto.codigoBarraProducto" type="text" class="w-full border px-3 py-2 rounded-md" />

      <label class="block">Descripción del producto</label>
      <input v-model="nuevoProducto.descripcionProducto" type="text" class="w-full border px-3 py-2 rounded-md" />

      <label class="block">Categoría</label>
      <select v-model="nuevoProducto.idCategoria" class="w-full border px-3 py-2 rounded-md">
        <option disabled value="">Selecciona una categoría</option>
        <option v-for="cat in categorias" :key="cat.idCategoria" :value="cat.idCategoria">
          {{ cat.nombreCategoria }}
        </option>
      </select>

      <label class="block">Cantidad</label>
      <input v-model.number="nuevoProducto.cantidadProducto" type="number" class="w-full border px-3 py-2 rounded-md" />

      <label class="block">Precio de compra</label>
      <input v-model.number="nuevoProducto.precioCompraProducto" type="number" class="w-full border px-3 py-2 rounded-md" />

      <label class="block">Precio de venta</label>
      <input v-model.number="nuevoProducto.precioVentaProducto" type="number" class="w-full border px-3 py-2 rounded-md" />

      <div class="flex justify-between pt-4">
        <button type="button" @click="router.push('/inventario')" class="px-4 py-2 bg-gray-300 rounded-md">Cancelar</button>
        <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Guardar</button>
      </div>
    </form>
  </div>
</template>
