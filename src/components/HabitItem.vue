<script setup>
import { ref } from 'vue'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '@/firebase'

const props = defineProps(['habit'])
const emit = defineEmits(['edit'])

const showDetails = ref(false)
const isDeleting = ref(false)

const toggleDetails = () => {
  showDetails.value = !showDetails.value
}

const handleDelete = async () => {
  isDeleting.value = true
  try {
    await deleteDoc(doc(db, 'habits', props.habit.id))
  } catch (error) {
    console.error('Ошибка при удалении привычки:', error)
  } finally {
    isDeleting.value = false
  }
}

const handleEdit = () => {
  emit('edit', props.habit)
}
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>

<template>
  <li class="mb-4 flex items-start p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">

    <div class="flex-1">
      <span @click="toggleDetails" class="cursor-pointer text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
        {{ habit.name }} - {{ habit.frequency }}
      </span>
    </div>

    <button
      @click.stop="handleDelete"
      :disabled="isDeleting"
      class="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 disabled:opacity-50"
    >
      <svg class="w-4 h-4 inline-block mr-1 align-middle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
      Удалить
    </button>

    <div v-if="showDetails" class="ml-4 p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
      <p class="text-gray-700">Описание привычки: {{ habit.description || 'Нет описания' }}</p>
      <button
        @click="handleEdit"
        class="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        Редактировать
      </button>
    </div>
    <!-- Индикатор удаления -->
    <div v-if="isDeleting" class="ml-4 text-center text-red-500">Удаление...</div>
  </li>
</template>