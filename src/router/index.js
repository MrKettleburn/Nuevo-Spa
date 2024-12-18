import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Services from '../views/Services.vue';
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
    path: '/gestion/reportes',
    name: 'Reportes',
    component: Statistics
  },
  // {
  //   path: '/gestion/entrenadores',
  //   name: 'Entrenadores',
  //   component: Trainers
  // },
  // {
  //   path: '/gestion/servicios',
  //   name: 'Services',
  //   component: ServiciosAdmin
  // },
  // {
  //   path: '/gestion/usuarios',
  //   name: 'Usuarios',
  //   component: Users
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;