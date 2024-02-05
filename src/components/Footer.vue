<template>
  <v-footer class="bg-red-darken-1 text-center d-flex flex-column">
    <div>
      <v-btn
        class="mx-4"
        icon="mdi-whatsapp"
        variant="text"
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=5521971096037&text&type=phone_number&app_absent=0"
      ></v-btn>
      <v-btn
        class="mx-4"
        icon="mdi-instagram"
        variant="text"
        target="_blank"
        href="https://www.instagram.com/israelhidequel/"
      ></v-btn>
    </div>

    <div class="pt-0">
      Entre em contato conosco hoje mesmo para agendar uma consulta inicial e dar o primeiro passo
      em direção a uma versão melhor de si mesmo.
    </div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>CoachRael</strong></div>
  </v-footer>
</template>

<script></script>
