<script setup>
import HabitItem from './HabitItem.vue'

 defineProps({
  habits: Array,
  isLoading: Boolean
})
const emit = defineEmits(['edit'])

const handleEdit = (habit) => {
  emit('edit', habit)
}
</script>

<template>
  <div>
    <p v-if="!isLoading && habits.length === 0" class="text-center text-gray-500">
      Нет привычек для отображения
    </p>
    <ul v-if="!isLoading">
      <HabitItem
        v-for="habit in habits"
        :key="habit.id"
        :habit="habit"
        @edit="handleEdit"
      />
    </ul>

    <div v-if="isLoading" class="text-center">Загрузка привычек...</div>
  </div>
</template>
