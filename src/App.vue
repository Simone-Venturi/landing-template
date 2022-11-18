<template>
  <NavbarVue />
  <RouterView />
  <CookiePolicy id="cookie-policy"/>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavbarVue from './components/Navbar.vue';
import CookiePolicy from './components/CookiePolicy.vue'
</script>

<style scoped>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#cookie-policy {
    position: -webkit-sticky; /* Safari */  
    position: sticky;
    bottom: 0;
}
</style>
