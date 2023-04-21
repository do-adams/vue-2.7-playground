<template>
  <div>
    <h1>{{ msg }}</h1>
    <input v-model="msg" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  msg = 'Hello from Class API 👋'
}
</script>
