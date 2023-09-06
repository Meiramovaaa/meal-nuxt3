<template>
  <header class="shadow-md bg-white h-16 flex justify-around items-center">
    <NuxtLink :to="{name:'index'}">Home</NuxtLink>
   <div class="flex items-center gap-4 h-full">
    <NuxtLink class="flex items-center transition px-2 hover:bg-purple-200 h-full" :to="{name:'name'}">Search meals</NuxtLink>
    <NuxtLink class="flex items-center transition px-2 hover:bg-purple-200 h-full" :to="{name:'letter'}">Meals by letter</NuxtLink>
    <NuxtLink class="flex items-center transition px-2 hover:bg-purple-200 h-full" :to="{name:'category'}">Meals by ingredients</NuxtLink>
   </div>
  </header>
</template>