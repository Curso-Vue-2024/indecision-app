// This is a SFC or Single Side Component

<template>
  <h1>Hola mundo</h1>
</template>

<script lang="ts" setup>
console.log('Hola mundo');
</script>

<!-- 
Al indicar scoped en el style, solo se aplica a los de este archivo.
Si no lo ponemos, como toda la App pasa por aquí, los aplica de forma global. 
-->
<style scoped>
h1 {
  color: green;
}
</style>
