<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const layout = "default";
</script>
