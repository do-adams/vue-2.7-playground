<template>
  <div>
    <h1>{{ msg }}</h1>
    <input v-model="msg" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('Hello from <script setup> 👋')
</script>
