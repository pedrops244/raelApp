<template>
  <v-card class="pa-3 ma-3" variant="tonal" color="white" elevation="5">
    <p class="text-h4">{{ props.title }}</p>
    <p class="text-subtitle-2 mt-4">{{ props.text }}</p>
  </v-card>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
});
</script>
