<template>
  <div>
    <h1 class="text">Hello 👋</h1>
    <input v-model="color" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const color = ref('red')
    return {
      color,
    }
  },
})
</script>

<style>
.text {
  color: v-bind(color);
}
</style>
