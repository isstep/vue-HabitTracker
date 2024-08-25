<template>
    <li class="mb-2 flex items-center">
      <span @click="toggleDetails" class="cursor-pointer">
        {{ habit.name }} - {{ habit.frequency }}
      </span>
      <button
        @click="handleDelete"
        :disabled="isDeleting"
        class="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
      >
        Удалить
      </button>
      <div v-if="showDetails" class="ml-4 p-2 border rounded bg-gray-100">
        <p>Описание привычки: {{ habit.description || 'Нет описания' }}</p>
        <button @click="handleEdit" class="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-700">
          Редактировать
        </button>
      </div>
      <div v-if="isDeleting" class="ml-4 text-center">Удаление...</div>
    </li>
  </template>
  
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
  