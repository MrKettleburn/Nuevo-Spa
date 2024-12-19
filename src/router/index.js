import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../components/About.vue';
import Services from '../views/Services.vue';
import HorarioSemanal from '../components/HorarioSemanal.vue';
import AdminPanel from "../views/admin/AdminPanel.vue";
import HomeLayout from "../views/HomeLayout.vue";
import AdminLayout from "../views/admin/AdminLayout.vue";
import PanelHorario from "../views/admin/PanelHorario.vue";
import Statistics from '../views/Statistics.vue';


const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'about',
        name: 'About',
        component: About
      },
      {
        path: 'services',
        name: 'Services',
        component: Services
      },
      {
        path: 'horario',
        name: 'Horario',
        component: HorarioSemanal
      }
    ]
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'Admin',
        component: AdminPanel
      },
      {
        path: 'horario',
        name: 'AdminPAn',
        component: PanelHorario
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;