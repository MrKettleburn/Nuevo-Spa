import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../components/About.vue';
import Services from '../views/Services.vue';
import HorarioSemanal from '../components/HorarioSemanal.vue';
import AllActivitiesEsp from '../components/AllActivitiesEsp.vue';


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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;