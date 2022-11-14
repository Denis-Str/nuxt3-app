<template>
  <TheHeader />
  <div>
    <h1>Welcome to the homepage</h1>
  </div>
  <!-- автоимпорт кнопки -->
  <GlobalButton />
</template>

<script setup>
// такой маринет тоже работает import TheHeader from "./components/TheHeader";
import { TheHeader } from "#components";
</script>

<style lang="scss" scoped>
h1 {
  color: $primary;
}
</style>
