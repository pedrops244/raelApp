<template>
  <v-app-bar color="primary" class="border-b" height="100">
    <v-app-bar-title>
      <v-img
        :width="100"
        aspect-ratio="auto 250 / 96"
        src="/src/images/logo-edited.jpg"
      ></v-img>
    </v-app-bar-title>
    <div class="d-flex justify-center">
      <v-btn color="secondary" prepend-icon="mdi-home" to="/"> Home </v-btn>
      <v-btn color="secondary" prepend-icon="mdi-dumbbell" to="/consultoria">
        Consultoria
      </v-btn>
      <v-btn color="secondary" prepend-icon="mdi-account-group" to="/planos">
        Planos
      </v-btn>
      <v-btn
        color="secondary"
        prepend-icon="mdi-card-account-phone"
        to="/contato"
      >
        Contato
      </v-btn>
    </div>
    <v-spacer />
  </v-app-bar>
</template>

<script setup></script>
