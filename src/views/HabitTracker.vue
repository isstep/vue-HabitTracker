<template>
  <div>
    <HeaderComponent />
    <div class="p-6 max-w-2xl mx-auto">
      <HabitForm :habit="editingHabit" @save="fetchHabits" />
      <HabitList :habits="habits" @edit="setEditingHabit" />
    </div>
  </div>
      <div v-if="isLoading" class="text-center">Загрузка привычек...</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import Cookies from 'js-cookie'
import { db } from '@/firebase'
import HeaderComponent from '@/components/HeaderComponent.vue'
import HabitForm from '@/components/HabitForm.vue'
import HabitList from '@/components/HabitList.vue'

const habits = ref([])
const editingHabit = ref(null)

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

const setEditingHabit = (habit) => {
  editingHabit.value = habit
}

onMounted(fetchHabits)
</script>
