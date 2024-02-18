<script setup></script>

<template>
  <v-container class="d-flex text-center justify-center">
    <v-row>
      <v-col cols="12">
        <v-card
          class="text-red pa-2 mt-3 d-flex align-center flex-column justify-center"
          variant="outlined"
          elevation="5"
          height="65vh"
        >
          <p class="letter-title text-uppercase">Entre em contato</p>
          <p class="mt-3 text-white text-button">
            Se você tiver dúvidas ou quiser bater um papo comigo <br />
            antes de fechar um plano, utilize um dos canais abaixo.
          </p>
          <v-card-actions>
            <v-btn
              class="mx-4 px-3"
              prepend-icon="mdi-whatsapp"
              variant="elevated"
              color="secondary"
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=5521971096037&text&type=phone_number&app_absent=0"
              >WhatsApp</v-btn
            >
            <v-btn
              class="mx-4 px-3"
              prepend-icon="mdi-instagram"
              variant="elevated"
              color="secondary"
              target="_blank"
              href="https://www.instagram.com/israelhidequel/"
              >Instagram</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
.letter-title {
  font-weight: 300;
  font-family: 'Portrait Text', Georgia, Times, serif;
  font-size: 4rem;
}
</style>
