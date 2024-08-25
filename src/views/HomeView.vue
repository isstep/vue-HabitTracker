<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="p-8 max-w-md mx-auto bg-white shadow-lg rounded-lg text-center">
      <h1 class="text-3xl font-bold mb-4">Добро пожаловать в HabitTracker</h1>
      <p class="text-lg text-gray-600 mb-6">Отслеживайте свои привычки и достигайте своих целей!</p>
      <router-link
        to="/login"
        class="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Войти в систему
      </router-link>
    </div>
  </div>
</template>
