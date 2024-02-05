<template>
  <v-col cols="12" sm="6" md="4" lg="4">
    <v-card flat class="border-b" color="primary" elevation="10">
      <v-card-text class="text-uppercase text-h6">
        <div>
          {{ props.text }}
        </div>
      </v-card-text>
      <v-img height="50vh" class="align-end text-black" src="../images/card-photo.jpg" cover>
        <v-card-title class="text-h4 font-weight-bold">R$ {{ props.title }}</v-card-title>
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
const props = defineProps({
  title: {
    type: String,
    default: '',
  },

  text: {
    type: String,
    default: '',
  },
});
const descriptions = [
  'Planilha personalizada de treino;',
  'Vídeos dos exercícios;',
  'Suporte diretamente com o personal por whatsapp;',
];
</script>
