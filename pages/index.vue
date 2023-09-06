<template>
  <div class="p-8">
    <LetterBlock />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 w-full">
    <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow-md rounded-xl">
      <CardComponent :meal='meal' :isRouter="true" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';

const store = useMyMealStore()
let meals = computed(() => store.getMealByLetter)
store.$state.letter = 'A'
onMounted(() => {
  store.searchMealByLetter()
})
</script>
