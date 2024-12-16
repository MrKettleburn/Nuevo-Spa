import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../components/About.vue';
import Services from '../views/Services.vue';
import HorarioSemanal from '../components/HorarioSemanal.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/horario',
    name: 'Horario',
    component: HorarioSemanal
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;