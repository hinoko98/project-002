<!-- src/views/inventario/AgregarCategoriaView.vue -->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const nuevaCategoria = ref({
  nombreCategoria: ''
})

const guardarCategoria = async () => {
  if (!nuevaCategoria.value.nombreCategoria.trim()) {
    alert('El nombre de la categoría es obligatorio.')
    return
  }

  try {
    await axios.post('http://localhost:3000/api/categorias', nuevaCategoria.value)
    alert('Categoría agregada correctamente ✅')
    router.push('/inventario') // o a una ruta de lista de categorías si la creas
  } catch (error) {
    console.error(error)
    alert('Error al guardar la categoría ❌')
  }
}
</script>

<template>
  <div class="max-w-xl mx-auto p-6">
    <h2 class="text-2xl font-bold mb-4">Agregar nueva categoría</h2>
    <form @submit.prevent="guardarCategoria" class="space-y-4 bg-white p-6 rounded-lg shadow">
      <label class="block font-medium">Nombre de la categoría</label>
      <input
        v-model="nuevaCategoria.nombreCategoria"
        type="text"
        placeholder="Ej: Bebidas"
        class="w-full border px-3 py-2 rounded-md"
      />

      <div class="flex justify-between pt-4">
        <button type="button" @click="router.push('/inventario/agregarproducto')" class="px-4 py-2 bg-gray-300 rounded-md">Cancelar</button>
        <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Guardar</button>
      </div>
    </form>
  </div>
</template>
