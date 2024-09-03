<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <header class="bg-white shadow-md transition-transform duration-300 ease-in-out">
      <div class="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <router-link to="/">
          <h1
            class="text-2xl font-bold text-blue-500 hover:text-blue-600 transition-transform duration-300 ease-in-out"
          >
            HabitTracker
          </h1>
        </router-link>
        <nav>
          <router-link
            to="/"
            class="text-gray-700 mx-3 hover:text-blue-500 transition-transform duration-300 ease-in-out"
            >Главная</router-link
          >
          <router-link
            to="/aboutUs"
            class="text-gray-700 mx-3 hover:text-blue-500 transition-transform duration-300 ease-in-out"
            >О нас</router-link
          >
          <router-link
            to="/help"
            class="text-gray-700 mx-3 hover:text-blue-500 transition-transform duration-300 ease-in-out"
            >Справка</router-link
          >
        </nav>
      </div>
    </header>

    <main class="flex-grow">
      <section class="flex items-center justify-center py-24 bg-blue-100">
        <div class="p-10 max-w-lg mx-auto rounded-lg text-center ease-in-out">
          <h2 class="text-4xl font-bold mb-4 text-blue-600">Добро пожаловать в HabitTracker</h2>
          <p class="text-lg text-gray-700 mb-6">
            Отслеживайте свои привычки и достигайте своих целей с легкостью и удовольствием!
          </p>
          <div class="transition-transform transform hover:scale-105">
            <router-link
              to="/login"
              class="bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Войти в систему
            </router-link>
          </div>
        </div>
      </section>

      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Возможности</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div
              class="bg-gray-100 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <h3 class="text-2xl font-semibold mb-4 text-blue-600">Отслеживание привычек</h3>
              <p class="text-gray-700">
                Создавайте и отслеживайте свои ежедневные, еженедельные и ежемесячные привычки с
                удобным интерфейсом.
              </p>
            </div>
            <div
              class="bg-gray-100 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <h3 class="text-2xl font-semibold mb-4 text-blue-600">Аналитика прогресса</h3>
              <p class="text-gray-700">
                Получайте визуализацию своего прогресса и мотивацию на основе аналитики данных.
              </p>
            </div>
            <div
              class="bg-gray-100 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <h3 class="text-2xl font-semibold mb-4 text-blue-600">Напоминания и уведомления</h3>
              <p class="text-gray-700">
                Настраивайте напоминания, чтобы не пропустить выполнение своих привычек и оставаться
                на пути к целям.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 bg-blue-50">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">О нас</h2>
          <p class="text-center text-lg text-gray-700 max-w-4xl mx-auto">
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
          <router-link
            to="/privacy"
            class="text-gray-700 mx-3 hover:text-blue-500 transition-transform duration-300 ease-in-out"
            >Политика конфиденциальности</router-link
          >
          <router-link
            to="/terms"
            class="text-gray-700 mx-3 hover:text-blue-500 transition-transform duration-300 ease-in-out"
            >Условия использования</router-link
          >
        </nav>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
