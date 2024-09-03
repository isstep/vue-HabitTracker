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

<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-200" >
    <div class="p-8 max-w-md mx-auto bg-white shadow-xl rounded-lg border border-gray-200 relative overflow-hidden">
      <div class="absolute inset-0 bg-blue-100 opacity-50 z-[-1]"></div>
      <h2 class="text-3xl font-bold text-center mb-6 text-gray-800">Вход в систему</h2>
      <button
        @click="signInWithGoogle"
        :disabled="loading"
        class="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform transform hover:scale-105 w-full disabled:opacity-60 disabled:cursor-not-allowed text-lg font-semibold"
      >
        <span v-if="loading" class="flex items-center justify-center">
          <svg class="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-6v6l4 2" /></svg>
          Загрузка...
        </span>
        <span v-else>Войти с помощью Google</span>
      </button>
      <div v-if="error" class="mt-4 text-red-500 text-center font-semibold">
        Ошибка: {{ error }}
      </div>
    </div>
  </div>
</template>