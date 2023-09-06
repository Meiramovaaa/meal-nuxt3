<template>
  <NuxtLink :to="'/detail/'+meal.idMeal" v-show="isRouter">
    <img loading="lazy" :src="meal.strMealThumb" :alt="meal.strMeal" class="h-48 rounded-t-lg object-cover w-full">
  </NuxtLink> 
    <img loading="lazy" :src="meal.strMealThumb" :alt="meal.strMeal" class="h-60 object-cover w-1/2" v-show="!isRouter">
    <div class="p-3  flex flex-col gap-4">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p>{{ meal.strInstructions }}</p>
        <div class="flex gap-3 items-center">
            <a :href="meal.strYoutube" target="_blank"
                class="px-3 py-3 rounded border-2 transition bg-red-500 hover:bg-red-600 hover:text-white border-red-600">YouTube</a>
        </div>
    </div>
</template>

<script setup>
  import {defineProps} from 'vue'
  const props =  defineProps({
    meal:Object,
    isRouter:Boolean
  })
</script>

