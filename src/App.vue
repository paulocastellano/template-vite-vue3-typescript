<template>
  <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/vuex">Vuex</router-link></li>
    <li><router-link to="/axios">Axios</router-link></li>
  </ul>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
