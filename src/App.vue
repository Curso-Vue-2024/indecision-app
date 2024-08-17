// This is a SFC or Single Side Component

<template>
  <h1>My first Vue App</h1>
  <hr />
  <MyCounter :value="5" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
</script>
