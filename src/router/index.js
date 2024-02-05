import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Planos from '../pages/Planos.vue';
import Page404 from '../pages/Page404.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/consultoria',
    name: 'Consultoria',
    component: Home,
  },
  {
    path: '/planos',
    name: 'Planos',
    component: Planos,
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Home,
  },
  {
    path: '/:pathMatch(.*)',
    name: 'Page404',
    component: Page404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
