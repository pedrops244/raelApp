<template>
  <v-col cols="12" sm="6" md="4" lg="4">
    <v-card class="border-b text-center" color="primary" elevation="10">
      <v-card-text class="text-uppercase text-h6">
        <div>
          {{ props.text }}
        </div>
      </v-card-text>
      <v-img
        height="52vh"
        class="align-end text-black"
        :src="props.img"
        cover
        :style="{ transform: hover ? 'scale(1.02)' : 'scale(1)' }"
        transition="scale-transition"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
      >
        <v-card-title class="font-weight-bold text-h4">
          <span class="text-h5" style="font-size: smaller; color: #ff0000">R$</span>
          <span style="font-size: larger">{{ props.title }}</span>
        </v-card-title>
      </v-img>
      <v-list lines="one">
        <v-list-item v-for="desc in descriptions" :key="desc" :subtitle="desc">
          <v-divider class="border-opacity-50 mt-2"></v-divider>
        </v-list-item>
      </v-list>
      <v-card-actions class="d-flex justify-center ma-2">
        <v-btn variant="elevated" color="white" target="_blank" href="/contato">Contratar</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },

  text: {
    type: String,
    default: '',
  },
  img: {
    type: String,
    default: '',
  },
});

const hover = ref(false);

const descriptions = [
  'Planilha personalizada de treino;',
  'Vídeos dos exercícios;',
  'Suporte diretamente com o personal por whatsapp;',
];
</script>
