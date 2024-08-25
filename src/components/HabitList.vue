<template>
  <div>
    <h2 class="text-xl font-semibold mb-4">Мои Привычки</h2>
    <form @submit.prevent="addHabit" class="mb-4">
      <div class="flex flex-col space-y-2">
        <input
          v-model="habitName"
          type="text"
          placeholder="Название привычки"
          class="p-2 border rounded"
        />
        <input
          v-model="habitFrequency"
          type="text"
          placeholder="Частота (например, Ежедневно)"
          class="p-2 border rounded"
        />
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700"
        >
          Добавить привычку
        </button>
      </div>
    </form>
    <ul>
      <li v-for="habit in habits" :key="habit.id" class="mb-2">
        {{ habit.name }} - {{ habit.frequency }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { collection, query, where, onSnapshot, addDoc } from 'firebase/firestore'
import Cookies from 'js-cookie'
import { db } from '@/firebase'

const habitName = ref('')
const habitFrequency = ref('')
const habits = ref([])

const fetchHabits = () => {
  const savedUser = Cookies.get('user')
  if (savedUser) {
    const userData = JSON.parse(savedUser)
    const q = query(collection(db, 'habits'), where('uid', '==', userData.uid))
    onSnapshot(
      q,
      (querySnapshot) => {
        habits.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      },
      (error) => {
        console.error('Ошибка при получении привычек:', error)
      }
    )
  } else {
    console.error('Пользователь не найден')
  }
}

const addHabit = async () => {
  const savedUser = Cookies.get('user')
  if (savedUser) {
    const userData = JSON.parse(savedUser)
    try {
      await addDoc(collection(db, 'habits'), {
        uid: userData.uid,
        name: habitName.value,
        frequency: habitFrequency.value,
        createdAt: new Date()
      })
      habitName.value = ''
      habitFrequency.value = ''
    } catch (error) {
      console.error('Ошибка при добавлении привычки:', error)
    }
  } else {
    console.error('Пользователь не найден')
  }
}

onMounted(fetchHabits)
</script>
