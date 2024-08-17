<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <h4>{{ text }}</h4>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

// const props = defineProps({
//   value: { type: Number, required: true },
// });

// const props = defineProps<[value: number]>();

interface Props {
  value: number;
  text: String;
}
const props = defineProps<Props>();

const counter = ref(props.value);
const squareCounter = computed(() => counter.value * counter.value);
</script>

<style scoped>
.btn {
  @apply p-3 bg-blue-500 rounded-md hover:bg-blue-200 mr-2;
}
</style>
