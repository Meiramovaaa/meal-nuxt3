<template>
  <div class="p-8 flex flex-col gap-8">
    <CategoryComponent :categories="categories" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const store = useMyCategoryStore()
const categories = computed(() => store.getAllCategories)

onMounted(() => {
  store.getAllCategs()
})

</script>



<style></style>
