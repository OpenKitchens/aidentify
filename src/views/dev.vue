<script setup>
import { RouterLink, RouterView } from 'vue-router'
import logo from "../components/logo.vue"

</script>

<template>
  <div class="h-dvh">
    <div class="absolute">
      <logo />
      <RouterLink to="/loading">loading</RouterLink>
      <RouterLink to="/upload">upload</RouterLink>
      <RouterLink to="/edit">edit</RouterLink>
    </div>
  </div>
</template>