<script setup>
import ThisMenu from '@/components/Menu.vue';
import ThisFooter from './components/Footer.vue';
</script>
<template>
  <v-app>
    <v-main class="background">
      <ThisMenu />
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <ThisFooter />
  </v-app>
</template>
<style>
.background {
  background-image: url('./images/background-planos.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;
}
</style>
