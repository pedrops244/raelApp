<template>
  <v-footer class="bg-red-darken-1 text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">
      Entre em contato conosco hoje mesmo para agendar uma consulta inicial e
      dar o primeiro passo em direção a uma versão melhor de si mesmo.
    </div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>CoachRael</strong></div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
  }),
};
</script>
