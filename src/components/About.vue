<template>
    <div class="content-about">
      <Section title="About us"/>
      <div class="col-12 text-center ">
        <h2 class="text-900 font-bold">Our Experts</h2>
      </div>
      <div class="grid card-container">
        <div class="col-12 md:col-6 lg:col-3 card-item" v-for="servicio in servicios" :key="servicio.id">
            <FlipCard :name="servicio.nombre" :image="xxx" :description="servicio.descripcion" :price="servicio.precio" :duration="servicio.duracion"/>
        </div>
      </div>
    </div>
   
</template>

<script setup >
import Section from '../primeVue-components/Section.vue';
import FlipCard from './FlipCardServicios.vue';
import { ref, onMounted } from 'vue';
import { fetchServicios } from '../services/ServiciosService.js';

const servicios = ref([]);

// Cargar servicios al montar el componente
const cargarServicios = async () => {
  try {
    servicios.value = await fetchServicios();
    console.log(servicios.value)
  } catch (error) {
    console.error('Error al cargar los servicios:', error);
  }
};


onMounted(cargarServicios);

// const teamMembers = ref([
//   {
//     name: "Olivia Mia",
//     description: "Spa & Beauty Expert",
//     image: '/public/img/team-1.jpg',
//     socialLinks: [
//       { icon: "pi pi-twitter", link: "#" },
//       { icon: "pi pi-facebook", link: "#" },
//       { icon: "pi pi-linkedin", link: "#" },
//       { icon: "pi pi-instagram", link: "#" },
//     ],
//   },
//   {
//     name: "Cory Brown",
//     description: "Spa & Beauty Expert",
//     image: '/public/img/team-2.jpg',
//     socialLinks: [
//       { icon: "pi pi-twitter", link: "#" },
//       { icon: "pi pi-facebook", link: "#" },
//       { icon: "pi pi-linkedin", link: "#" },
//       { icon: "pi pi-instagram", link: "#" },
//     ],
//   },
//   {
//     name: "Elizabeth Ross",
//     description: "Spa & Beauty Expert",
//     image: '/public/img/team-3.jpg',
//     socialLinks: [
//       { icon: "pi pi-twitter", link: "#" },
//       { icon: "pi pi-facebook", link: "#" },
//       { icon: "pi pi-linkedin", link: "#" },
//       { icon: "pi pi-instagram", link: "#" },
//     ],
//   },
//   {
//     name: "Kelly Walke",
//     description: "Spa & Beauty Expert",
//     image: "/public/img/team-4.jpg",
//     socialLinks: [
//       { icon: "pi pi-twitter", link: "#" },
//       { icon: "pi pi-facebook", link: "#" },
//       { icon: "pi pi-linkedin", link: "#" },
//       { icon: "pi pi-instagram", link: "#" },
//     ],
//   },
// ]);
</script>  

<style scoped>
  .content-about {
  flex: 1;
  padding: 10px;
}

.text-900 {
  color: #1a202c;
}

.font-bold {
  font-weight: 700;
}
</style>