<script setup>
import { ref, watch } from 'vue'
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'
import Cookies from 'js-cookie'
import { db } from '@/firebase'

const props = defineProps({
  habit: Object
})
const emit = defineEmits(['save'])

const habitName = ref('')
const habitFrequency = ref('')
const isEditing = ref(false)
const isLoading = ref(false)

watch(() => props.habit, (newHabit) => {
  if (newHabit) {
    habitName.value = newHabit.name
    habitFrequency.value = newHabit.frequency
    isEditing.value = true
  } else {
    habitName.value = ''
    habitFrequency.value = ''
    isEditing.value = false
  }
})

const handleSubmit = async () => {
  const savedUser = Cookies.get('user')
  if (savedUser) {
    const userData = JSON.parse(savedUser)
    isLoading.value = true
    try {
      if (isEditing.value) {
        const habitId = props.habit.id
        await updateDoc(doc(db, 'habits', habitId), {
          name: habitName.value,
          frequency: habitFrequency.value
        })
      } else {
        await addDoc(collection(db, 'habits'), {
          uid: userData.uid,
          name: habitName.value,
          frequency: habitFrequency.value,
          description: '', 
          createdAt: new Date()
        })
      }
      habitName.value = ''
      habitFrequency.value = ''
      isEditing.value = false
      emit('save')
    } catch (error) {
      console.error('Ошибка при сохранении привычки:', error)
    } finally {
      isLoading.value = false
    }
  } else {
    console.error('Пользователь не найден')
  }
}
</script>


<template>
    <form @submit.prevent="handleSubmit" class="mb-4">
      <div class="flex flex-col space-y-2">
        <input
          v-model="habitName"
          type="text"
          placeholder="Название привычки"
          class="p-2 border rounded"
        />
        <select v-model="habitFrequency" class="p-2 border rounded">
          <option value="" disabled>Выберите частоту</option>
          <option value="Ежедневно">Ежедневно</option>
          <option value="Еженедельно">Еженедельно</option>
          <option value="Ежемесячно">Ежемесячно</option>
        </select>
        <button
          type="submit"
          :disabled="isLoading"
          class="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700"
        >
          {{ isEditing ? 'Сохранить изменения' : 'Добавить привычку' }}
        </button>
        <div v-if="isLoading" class="mt-2 text-center">Загрузка...</div>
      </div>
    </form>
  </template>