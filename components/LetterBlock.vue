<template>
  <div class="flex justify-center gap-3">
      <NuxtLink :to="'/letter/'+letter" v-for="letter of letters" :key="letter">
          {{letter }}
      </NuxtLink>
  </div>
</template>

<script>
  export default {
      data(){
          return {
              letters:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
          }
      }
  }
</script>