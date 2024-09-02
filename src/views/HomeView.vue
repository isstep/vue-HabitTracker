<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <header class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <router-link to="/"
          ><h1 class="text-2xl font-bold text-blue-500">HabitTracker</h1></router-link
        >
        <nav>
          <router-link to="/" class="text-gray-700 mx-2 hover:text-blue-500">Главная</router-link>
          <router-link to="/help" class="text-gray-700 mx-2 hover:text-blue-500"
            >Справка</router-link
          >
          <router-link to="/about" class="text-gray-700 mx-2 hover:text-blue-500"
            >О нас</router-link
          >
        </nav>
      </div>
    </header>

    <main class="flex-grow">
      <section class="flex items-center justify-center py-20 bg-blue-100">
        <div class="p-8 max-w-lg mx-auto rounded-lg text-center">
          <h2 class="text-3xl font-bold mb-4">Добро пожаловать в HabitTracker</h2>
          <p class="text-lg text-gray-600 mb-6">
            Отслеживайте свои привычки и достигайте своих целей!
          </p>
          <router-link
            to="/login"
            class="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Войти в систему
          </router-link>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-10">Наши функции</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-4">Отслеживание привычек</h3>
              <p class="text-gray-600">
                Создавайте и отслеживайте свои ежедневные, еженедельные и ежемесячные привычки с
                удобным интерфейсом.
              </p>
            </div>
            <div class="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-4">Аналитика прогресса</h3>
              <p class="text-gray-600">
                Получайте визуализацию своего прогресса и мотивацию на основе аналитики данных.
              </p>
            </div>
            <div class="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-4">Напоминания и уведомления</h3>
              <p class="text-gray-600">
                Настраивайте напоминания, чтобы не пропустить выполнение своих привычек и оставаться
                на пути к целям.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-blue-50">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-10">О нас</h2>
          <p class="text-center text-lg text-gray-600 max-w-3xl mx-auto">
            HabitTracker — это современное приложение, созданное для того, чтобы помочь вам изменить
            свою жизнь к лучшему, формируя полезные привычки. Наша команда стремится предоставить
            пользователям простой и интуитивно понятный инструмент для достижения их целей.
          </p>
        </div>
      </section>
    </main>

    <footer class="bg-white shadow-inner">
      <div class="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <p class="text-gray-600">&copy; 2024 HabitTracker. Все права защищены.</p>
        <nav>
          <router-link to="/privacy" class="text-gray-700 mx-2 hover:text-blue-500"
            >Политика конфиденциальности</router-link
          >
          <router-link to="/terms" class="text-gray-700 mx-2 hover:text-blue-500"
            >Условия использования</router-link
          >
        </nav>
      </div>
    </footer>
  </div>
</template>
