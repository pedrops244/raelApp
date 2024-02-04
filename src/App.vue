<script setup>
import ThisMenu from '@/components/Menu.vue';
</script>
<template>
  <v-app>
    <v-main>
      <ThisMenu />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<style></style>
