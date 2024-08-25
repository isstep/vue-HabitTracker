<template>
  <div> 
    <header v-if="!loading" class="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div class="flex items-center">
        <img v-if="user" :src="user.photoURL" alt="User Avatar" class="w-10 h-10 rounded-full mr-3" />
        <span v-if="user" class="font-semibold">{{ user.displayName }}</span>
      </div>
      <button v-if="user" @click="signOut" class="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600">
        Выход
      </button>
    </header>
  </div>
</template>

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
