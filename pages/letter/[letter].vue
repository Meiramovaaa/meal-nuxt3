<template>
  <div class="p-8 flex flex-col items-center justify-center gap-8">
    <LetterBlock />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 w-full">
      <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow-md rounded-xl">
        <CardComponent :meal='meal' :isRouter="true"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch, computed } from 'vue';
import CardComponent from '../../components/CardComponent.vue';

const store = useMyMealStore()
const route = useRoute();
let meals = computed(()=> store.getMealByLetter)
store.$state.letter = route.params.letter
watch(route, value => {
  store.searchMealByLetter()
})

onMounted(() => {
  store.searchMealByLetter()
})
</script>