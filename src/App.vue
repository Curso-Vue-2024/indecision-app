// This is a SFC or Single Side Component

<template>
  <h1>My first Vue App</h1>
  <hr />
  <MyCounter :value="5" text="Hola mundo" />
  <MyCounterScript :value="3" />
  <MyCounterScript2 :value="7" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script>
