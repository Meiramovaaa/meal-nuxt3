<template>
   <div class="flex justify-center gap-8">
      <div v-for="cat in categories" :key="cat" class="flex gap-4">
        <NuxtLink :to="'/category/'+cat.strCategory">
          <h2 class="font-semibold">{{ cat.strCategory }}</h2>
        </NuxtLink>
      </div>
    </div>
</template>

<script setup>
  const props = defineProps({
    categories:Object
  })
</script>

