<script setup>
import HomeCol from '@/components/HomeCol.vue';
</script>

<template>
  <v-container class="d-flex text-center justify-center">
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-img cover src="../images/home-image-rael.png"></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="d-flex align-center">
        <v-card class="pa-3 ma-3">
          <v-img cover src="../images/coach-rael.jpg"> </v-img>
          <p class="text-subtitle-2 mt-4">
            Avaliar, organizar, prescrever e orientar a prática de atividades físicas estruturadas
            com base em princípios do treinamento desportivo buscando os objetivos e necessidades
            específicas do indivíduo é uma das marcas do trabalho de Israel Hidequel.
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <HomeCol
          title="Por que contratar uma consultoria fitness online?"
          text="Ao longo do processo de treinamento, um personal trainer oferece apoio contínuo e
          incentivo para manter seus clientes motivados e no caminho certo. Eles demonstram
          técnicas de exercícios adequadas, fornecem feedback sobre a forma e ajustam a
          intensidade do treino conforme necessário para garantir segurança e eficácia."
        />
        <HomeCol
          title="Como é montado o treino personalizado em uma consultoria fitness online?"
          text="A princípio, o aluno recebe uma anamnese para que seja respondida,
          e caso ele tenha uma avaliação física recente, peço que envie. Se não
          tiver, peço que faça para termos um parâmetro de comparação para futuros resultados.
          A partir daí, o treino é montado, levando todas as informações em conta para
          que seja um treino assertivo exclusivo."
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-img cover src="../images/other-home-image.png"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style></style>
