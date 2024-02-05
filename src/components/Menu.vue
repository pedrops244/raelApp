<template>
  <v-navigation-drawer v-model="drawer" color="primary">
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index" :to="item.to">
        <v-list-item-icon>
          <v-icon color="secondary">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar color="primary" class="border-b" height="100">
    <v-app-bar-title>
      <v-img :width="100" aspect-ratio="auto 250 / 96" src="/src/images/logo-edited.jpg"></v-img>
    </v-app-bar-title>

    <div class="d-flex justify-center">
      <v-btn
        v-for="(item, index) in items"
        :key="index"
        class="d-none d-lg-flex d-xl-none d-xxl-none"
        color="secondary"
        :prepend-icon="item.icon"
        :to="item.to"
        >{{ item.title }}
      </v-btn>
    </div>
    <v-spacer />
    <v-app-bar-nav-icon class="d-lg-none d-xl-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Home', icon: 'mdi-home', to: '/' },
        { title: 'Consultoria', icon: 'mdi-dumbbell', to: '/consultoria' },
        { title: 'Planos', icon: 'mdi-account-group', to: '/planos' },
        { title: 'Contato', icon: 'mdi-card-account-phone', to: '/contato' },
      ],
    };
  },
};
</script>
