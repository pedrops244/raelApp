<template>
  <v-carousel-item>
    <v-card
      height="100%"
      class="pa-8 ma-5 d-flex justify-center align-center flex-column"
      variant="text"
      color="white"
      elevation="3"
    >
      <p class="font-weight-medium font-italic">"{{ props.text }}"</p>
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
