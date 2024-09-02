<template>
  <div class="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
    <h1 class="text-3xl font-bold mb-6">Справка по использованию HabitTracker</h1>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Общий обзор</h2>
      <p class="text-gray-700 mb-4">
        Этот компонент представляет собой элемент списка для отображения и управления привычками
        пользователя. В компоненте есть возможность просматривать детали привычки, редактировать или
        удалять её.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Структура компонента</h2>
      <ul class="list-disc list-inside text-gray-700">
        <li>
          <strong>Название и частота привычки:</strong> Основная информация, которая отображается
          для пользователя.
        </li>
        <li><strong>Кнопка "Удалить":</strong> Позволяет пользователю удалить привычку.</li>
        <li>
          <strong>Детали привычки:</strong> Появляются при клике на название привычки и показывают
          дополнительную информацию, такую как описание и кнопку для редактирования.
        </li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Визуальное оформление и поведение</h2>

      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-2">Отображение названия и частоты привычки</h3>
        <p class="text-gray-700 mb-4">
          Эта информация отображается в виде строки с возможностью клика. При клике на название
          привычки отображаются дополнительные детали (описание и кнопка редактирования). Название и
          частота привычки оформлены как интерактивный элемент с использованием
          <code>cursor-pointer</code>.
        </p>
        <div class="p-4 bg-gray-100 border rounded">
          <p><strong>Привычка:</strong> Медитация - Ежедневно</p>
        </div>
      </div>

      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-2">Кнопка "Удалить"</h3>
        <p class="text-gray-700 mb-4">
          Кнопка для удаления привычки расположена справа от названия и оформлена красным цветом.
          При наведении кнопка изменяет цвет, чтобы подчеркнуть действие удаления. Во время удаления
          появляется индикатор "Удаление...", который заменяет кнопку.
        </p>
        <div class="p-4 bg-gray-100 border rounded">
          <button class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700">Удалить</button>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-2">Отображение деталей привычки</h3>
        <p class="text-gray-700 mb-4">
          Детали привычки появляются при клике на название. Показаны в отдельном блоке под названием
          привычки, включая описание и кнопку для редактирования.
        </p>
        <div class="p-4 bg-gray-100 border rounded">
          <p><strong>Описание привычки:</strong> Медитация 10 минут ежедневно</p>
          <button class="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-700">
            Редактировать
          </button>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">Функционал компонента</h2>

      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-2">Переключение отображения деталей</h3>
        <p class="text-gray-700 mb-4">
          Для отображения или скрытия дополнительных деталей используется функция
          <code>toggleDetails</code>, которая изменяет значение <code>showDetails</code>.
        </p>
        <pre class="bg-gray-100 p-4 rounded">
  <code>
  const toggleDetails = () => {
    showDetails.value = !showDetails.value
  }
  </code>
          </pre>
      </div>

      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-2">Удаление привычки</h3>
        <p class="text-gray-700 mb-4">
          При нажатии на кнопку "Удалить" вызывается функция <code>handleDelete</code>, которая
          удаляет привычку из базы данных Firebase. Пока происходит удаление, кнопка заменяется
          индикатором "Удаление...".
        </p>
        <pre class="bg-gray-100 p-4 rounded">
  <code>
  const handleDelete = async () => {
    isDeleting.value = true
    try {
      await deleteDoc(doc(db, 'habits', props.habit.id))
    } catch (error) {
      console.error('Ошибка при удалении привычки:', error)
    } finally {
      isDeleting.value = false
    }
  }
  </code>
          </pre>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-2">Редактирование привычки</h3>
        <p class="text-gray-700 mb-4">
          При нажатии на кнопку "Редактировать" вызывается функция <code>handleEdit</code>, которая
          передаёт данные привычки родительскому компоненту для редактирования.
        </p>
        <pre class="bg-gray-100 p-4 rounded">
  <code>
  const handleEdit = () => {
    emit('edit', props.habit)
  }
  </code>
          </pre>
      </div>
    </section>

    <section class="mt-8 text-center">
      <router-link
        to="/"
        class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Вернуться на главную
      </router-link>
    </section>
  </div>
</template>
