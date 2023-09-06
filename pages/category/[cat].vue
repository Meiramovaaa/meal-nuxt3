<template>
  <div class="p-8 flex flex-col gap-8">
    <CategoryComponent :categories="categories"/>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 w-full">
      <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow-md rounded-xl">
        <NuxtLink :to="'/detail/'+meal.idMeal">
          <img loading="lazy" :src="meal.strMealThumb" :alt="meal.strMeal" class="h-60 object-cover w-full rounded-t"
            v-show="!isRouter">
          <div class="p-3  flex flex-col gap-4">
            <h3 class="font-bold">{{ meal.strMeal }}</h3>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import CategoryComponent from '../../components/CategoryComponent.vue';

const store = useMyCategoryStore()
const mealStore = useMyMealStore()
const route = useRoute();
const categories = computed(() => store.getAllCategories)
const meals = computed(()=> mealStore.getMealByCat)

watch(route, value => {
  mealStore.getMealByCategory(route.params.cat)
})
onMounted(()=>{
  mealStore.getMealByCategory(route.params.cat)
})

const props = defineProps({
  isRouter:Boolean
})
</script>
