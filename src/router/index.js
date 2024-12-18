import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../components/About.vue';
import Services from '../views/Services.vue';
import HorarioSemanal from '../components/HorarioSemanal.vue';
import AllActivitiesEsp from '../components/AllActivitiesEsp.vue';
import HorarioCliente from '../components/horarioCliente.vue';
import MyReserves from '../components/myReserves.vue';
import Statistics from '../views/Statistics.vue';


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
  },
  {
    path: '/allActivities',
    name: 'allActivities',
    component: AllActivitiesEsp
  },
  {
    path: '/horarioCliente',
    name: 'horarioCliente',
    component: HorarioCliente
  },
  {
    path: '/myReserves',
    name: 'myReserves',
    component: MyReserves
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;