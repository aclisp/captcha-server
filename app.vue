<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<template>
  <div>
    <p>Hello {{ data?.hello }}</p>
    <p>Counter {{ data?.counter }}</p>
  </div>
</template>
