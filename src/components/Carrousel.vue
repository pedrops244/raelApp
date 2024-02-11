<template>
  <v-carousel-item>
    <v-card
      height="100%"
      class="pa-8 ma-5 d-flex justify-center align-center flex-column"
      variant="tonal"
      color="white"
      elevation="5"
    >
      <p class="font-weight-medium text-h6 font-italic">"{{ props.text }}"</p>
      <p class="text-subtitle-2 mt-4 text-red">{{ props.name }}</p>
    </v-card>
  </v-carousel-item>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
});
</script>
