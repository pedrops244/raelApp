<script setup>
import ThisMenu from '@/components/Menu.vue';
import ThisFooter from './components/Footer.vue';
</script>
<template>
  <v-app>
    <v-main>
      <ThisMenu />
      <router-view></router-view>
      <ThisFooter />
    </v-main>
  </v-app>
</template>
<style></style>
