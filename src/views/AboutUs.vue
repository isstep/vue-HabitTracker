<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <header class="text-center mb-12">
      <h1 class="text-4xl font-extrabold text-gray-800 mb-4">О нас</h1>
      <p class="text-lg text-gray-600">
        Познакомьтесь с HabitTracker и узнайте, что стоит за нашим приложением!
      </p>
    </header>

    <main class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Что такое HabitTracker?</h2>
        <p class="text-gray-700">
          HabitTracker — это современное приложение, предназначенное для того, чтобы помочь вам
          отслеживать и формировать полезные привычки. С помощью нашего простого в использовании
          интерфейса вы можете установить цели, отслеживать свой прогресс и получать мотивацию для
          достижения успеха.
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Цели приложения</h2>
        <ul class="list-disc pl-5 text-gray-700">
          <li>Помочь пользователям выработать и поддерживать полезные привычки.</li>
          <li>Предоставить удобный интерфейс для отслеживания прогресса.</li>
          <li>
            Мотивировать пользователей достигать своих целей через визуализацию данных и
            напоминания.
          </li>
        </ul>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Разработчик</h2>
        <div class="flex flex-wrap -m-4">
            <div class="p-4 w-full md:w-1/3">
    <a href="https://github.com/isstep" target="_blank" rel="noopener noreferrer" class="bg-white p-6 rounded-lg shadow-md text-center block">
      <img
        src="/avatar.jpg"
        alt="developer"
        class="w-32 h-32 mx-auto rounded-full border-4 border-gray-200 mb-4"
      />
      <h3 class="text-xl font-semibold text-gray-800 mb-2">isstep</h3>
    </a>
  </div>
        </div>
      </section>
      <section>
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Контактная информация</h2>
        <p class="text-gray-700 mb-4">
          Если у вас есть вопросы или предложения, не стесняйтесь связаться с нами:
        </p>
        <ul class="list-disc pl-5 text-gray-700">
          <li>
            Email:
            <a href="mailto:vzeldak07@gmail.com" class="text-blue-500 hover:underline"
              >vzeldak07@gmail.com</a
            >
          </li>
          <li>Телефон: +375257517774</li>
        </ul>
      </section>

      <section class="mt-8 text-center">
      <router-link
        to="/"
        class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Вернуться на главную
      </router-link>
    </section>
    </main>
  </div>
</template>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}

h1,
h2,
h3 {
  font-family: 'Montserrat', sans-serif;
}

ul.list-disc {
  list-style-type: disc;
}

</style>
