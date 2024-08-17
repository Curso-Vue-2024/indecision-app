// This is a SFC or Single Side Component

<template>
  <h1>My first Vue App</h1>
  <hr />
  <MyCounter :value="5" text="Hola mundo" />
  <MyCounterScript :value="3" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
</script>
