<template>
  <div id="app">
    <div id="nav">
      <router-link to="/script-setup" active-class="strong"
        >Script Setup</router-link
      >
      |
      <router-link to="/composition-api" active-class="strong"
        >Composition API</router-link
      >
      |
      <router-link to="/options-api" active-class="strong"
        >Options API</router-link
      >
      |
      <router-link to="/class-api" active-class="strong">Class API</router-link>
      |
      <router-link to="/css-v-bind" active-class="strong"
        >CSS v-bind</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<style>
.strong {
  font-weight: bold;
  color: darkviolet;
}
</style>
