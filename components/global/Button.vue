<template>
  <button type="button" @click="increment">button</button>
  <div>{{ count }}</div>
  <div>{{ double }}</div>
</template>

<script setup>
const count = ref(1);
const double = computed(() => count.value * 2)
const increment = () => count.value++;
</script>
<style lang="scss" scoped>

</style>
