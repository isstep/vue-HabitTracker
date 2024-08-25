<template>
  <div class="p-6 space-y-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-semibold mb-4">Ваши привычки</h2>
    <ul v-if="habits.length">
      <li v-for="habit in habits" :key="habit.id" class="p-4 border-b">
        {{ habit.name }} - {{ habit.frequency }}
      </li>
    </ul>
    <div v-else>
      <p>У вас пока нет привычек.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { db, auth } from '@/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'

const habits = ref([])

onMounted(async () => {
  const user = auth.currentUser
  if (user) {
    const q = query(collection(db, 'habits'), where('uid', '==', user.uid))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      habits.value.push({ id: doc.id, ...doc.data() })
    })
  }
})
</script>
