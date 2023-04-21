<template>
  <div>
    <h1>{{ msg }}</h1>
    <input v-model="msg" />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      msg: 'Hello from Options API 👋',
    }
  },
}
</script>
