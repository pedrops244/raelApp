<script setup></script>

<template>
  <v-container class="d-flex text-center justify-center">
    <v-row>
      <v-col cols="12">
        <v-card
          class="text-red pa-3 ma-3 d-flex align-center flex-column justify-center"
          variant="outlined"
          elevation="5"
          height="65vh"
        >
          <p class="letter-title text-uppercase">Entre em contato</p>
          <p class="mt-3 text-white text-button">
            Se você tiver dúvidas ou quiser bater um papo comigo antes de fechar um plano, utilize
            um dos canais abaixo.
          </p>
          <v-card-actions>
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
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
.letter-title {
  color: #ffffff;
  font-family: 'Mohave', Sans-serif;
  font-size: 58px;
  letter-spacing: -2px;
  font-weight: 400;
}
</style>
