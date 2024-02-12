<script setup></script>

<template>
  <v-container class="d-flex text-center justify-center background-contato">
    <v-row>
      <v-col cols="12">
        <v-card variant="text">
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

          <div class="pt-0">
            Entre em contato conosco hoje mesmo para agendar uma consulta inicial e dar o primeiro
            passo em direção a uma versão melhor de si mesmo.
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
.background-contato {
  background-image: url('../images/');
  background-size: cover;
  background-position: center;
  text-align: center;
}
</style>
