<template>
  <div>
    <div class="p-8">
        <input type="text" name="" id="" class="rounded border-2 border-gray-200 w-full" placeholder="Serch for meals"
            v-model="keyword" @change="searchMeals">
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 w-full">
      <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow-md rounded-xl">
        <CardComponent :meal='meal' :isRouter="true"/>
      </div>
    </div>
  </div>
</template>

<script setup>
  const store = useMyMealStore()
  const route = useRoute();
  const keyword = ref('')
  const meals = computed(()=> store.getSearchedMeal)
  onMounted(()=>{
      keyword.value = route.params.name
      if(keyword.value) searchMeals()
  })
  function searchMeals() {
      store.searchMeal(keyword.value)
  }
</script>