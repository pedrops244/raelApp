<script setup>
import ThisMenu from '@/components/Menu.vue';
import ThisFooter from './components/Footer.vue';
</script>
<template>
  <v-app>
    <v-main class="background">
      <ThisMenu />
      <router-view></router-view>
    </v-main>
    <ThisFooter />
  </v-app>
</template>
<style>
.background {
  background-image: url('./images/teste1.jpg');
  background-size: cover;
  background-position: left;
  text-align: center;
}
</style>
