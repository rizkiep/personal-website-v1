<template>
  <header>
    <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->
    <Navbar></Navbar>
  </header>
  <RouterView />
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from './components/Navbar.vue'
  components:{Navbar}
</script>
