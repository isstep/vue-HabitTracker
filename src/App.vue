<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import Cookies from 'js-cookie'

const user = ref(null)
const router = useRouter()

onMounted(() => {
  const savedUser = Cookies.get('user')
  if (savedUser) {
    user.value = JSON.parse(savedUser)
  } else {
    router.push('/')
  }
})
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <router-view />
  </div>
</template>
