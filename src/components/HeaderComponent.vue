
<script setup>
import { ref, onMounted } from 'vue'

import Cookies from 'js-cookie'
import { auth } from '@/firebase'

const user = ref(null)
const loading = ref(true)

onMounted(() => {
  const savedUser = Cookies.get('user')
  if (savedUser) {
    user.value = JSON.parse(savedUser)
  }
  loading.value = false
})

const signOut = async () => {
  try {
    await auth.signOut()
    Cookies.remove('user')
    user.value = null
    window.location.reload() 
  } catch (error) {
    console.error('Error during sign-out:', error)
  }
}
</script>

<template>
  <div>
    <header v-if="!loading" class="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white p-4 flex items-center justify-between shadow-md rounded-b-lg">
      <div class="flex items-center space-x-4">
        <img v-if="user" :src="user.photoURL" alt="User Avatar" class="w-12 h-12 rounded-full border-2 border-gray-700" />
        <span v-if="user" class="font-semibold text-lg">{{ user.displayName }}</span>
      </div>
      <button v-if="user" @click="signOut" class="bg-red-600 px-4 py-2 rounded-lg text-white font-medium shadow-md hover:bg-red-700 transition-colors duration-300">
        Выход
      </button>
    </header>
  </div>
</template>



<style scoped>
header {
  background: linear-gradient(to right, #0c1d2a, #4299e1, #3182ce);
}

header button {
  transition: background-color 0.3s ease;
}

header button:hover {
  background-color: #c53030;
}
</style>
