<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <!-- Example Message -->
      <ChatBubble :its-mine="true" message="Hola mundo" />
      <ChatBubble
        :its-mine="false"
        message="sí"
        image="https://yesno.wtf/assets/yes/1-af11222d8d4af90bdab8fc447c8cfebf.gif"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ChatBubble from '@/components/chat/ChatBubble.vue';
</script>
