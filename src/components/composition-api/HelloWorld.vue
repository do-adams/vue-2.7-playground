<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const msg = ref('Hello from Composition API 👋')
    return {
      msg,
    }
  },
})
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <input v-model="msg" />
  </div>
</template>
