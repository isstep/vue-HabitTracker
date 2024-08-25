<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="p-8 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 class="text-2xl font-semibold text-center mb-6">Вход в систему</h2>
      <button
        @click="signInWithGoogle"
        :disabled="loading"
        class="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="loading">Загрузка...</span>
        <span v-else>Войти с помощью Google</span>
      </button>
      <div v-if="error" class="mt-4 text-red-500 text-center">Ошибка: {{ error }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Cookies from 'js-cookie'
import { auth, GoogleAuthProvider, signInWithPopup, doc, db, setDoc } from '@/firebase'

const router = useRouter()
const loading = ref(false)
const error = ref(null)

const signInWithGoogle = async () => {
  loading.value = true
  error.value = null

  try {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)

    const userData = {
      displayName: result.user.displayName,
      email: result.user.email,
      photoURL: result.user.photoURL,
      uid: result.user.uid
    }

    await setDoc(doc(db, 'users', userData.uid), userData)
    Cookies.set('user', JSON.stringify(userData), { expires: 7 })

    router.push('/habit-tracker')
  } catch (err) {
    error.value = 'Ошибка при входе с Google: ' + err.message
  } finally {
    loading.value = false
  }
}
</script>
