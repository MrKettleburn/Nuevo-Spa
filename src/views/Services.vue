<template>
    <Section title="Services"/>
    <div class="services-view">
      <!-- Barra de búsqueda y filtros -->
      <div class="search-container">
        <div class="filters">
        <InputText placeholder="Buscar actividades..." v-model="searchQuery" class="search-bar" />
      </div>
        <div class="filter-options">
          <Dropdown :options="activityTypes" v-model="selectedActivityType" placeholder="Tipo de actividad" />
          <Dropdown :options="timeSlots" v-model="selectedTimeSlot" placeholder="Hora" />
          <Dropdown :options="responsibles" v-model="selectedResponsible" placeholder="Responsable" />
          <Button label="Filtrar" class="p-button-secondary" @click="filterResults" />
        </div>
      
      </div>
     
      <!-- Lista de servicios con paginación -->
      <div class="services-grid">
        <!-- <div v-for="(service, index) in paginatedServices" :key="index" class="service-card">
          <img :src="service.image" alt="Activity Image" class="service-image" />
          <div class="service-details">
            <h4>{{ service.title }}</h4>
            <p><strong>Responsable:</strong> {{ service.responsible }}</p>
            <p><strong>Hora:</strong> {{ service.time }}</p>
            <Button label="Reservar" class="p-button-secondary" />
          </div>
        </div> -->
      </div>
  
      <!-- Paginador -->
      <Paginator
        :rows="itemsPerPage"
        :totalRecords="filteredServices.length"
        :first="first"
        @page="onPageChange"
        layout="PrevPageLink CurrentPageReport NextPageLink"
      />
    </div>
  </template>
  
  <script setup>
  import Section from '../primeVue-components/Section.vue';
import { ref, computed } from "vue";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import Paginator from "primevue/paginator";

// Datos simulados
const services = ref([
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Masaje Relajante",
    responsible: "Juan Pérez",
    time: "10:00 AM",
    type: "Masaje",
    timeSlot: "Mañana",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Terapia Facial Antiedad",
    responsible: "Ana López",
    time: "3:00 PM",
    type: "Terapia facial",
    timeSlot: "Tarde",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mascarilla de Arcilla",
    responsible: "Carlos Díaz",
    time: "5:00 PM",
    type: "Cuidado de la piel",
    timeSlot: "Tarde",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1611073615848-d6ff6215931f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Masaje Deportivo",
    responsible: "Juan Pérez",
    time: "7:00 PM",
    type: "Masaje",
    timeSlot: "Noche",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1621554258209-a4a4305e29e5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Masaje con Aromaterapia",
    responsible: "Ana López",
    time: "11:00 AM",
    type: "Masaje",
    timeSlot: "Mañana",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cuidado Facial Profundo",
    responsible: "Carlos Díaz",
    time: "2:00 PM",
    type: "Terapia facial",
    timeSlot: "Tarde",
  },
  {
    id: 7,
    image: "https://plus.unsplash.com/premium_photo-1661274108346-6e831c83d33e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tratamiento Hidratante",
    responsible: "Ana López",
    time: "6:00 PM",
    type: "Cuidado de la piel",
    timeSlot: "Noche",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1630595632518-8217c0bceb8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Terapia de Relajación",
    responsible: "Juan Pérez",
    time: "9:00 AM",
    type: "Masaje",
    timeSlot: "Mañana",
  },
  {
    id: 9,
    image: "https://plus.unsplash.com/premium_photo-1661603771539-faa0e3ed7ca6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Exfoliación Corporal",
    responsible: "Carlos Díaz",
    time: "4:00 PM",
    type: "Cuidado de la piel",
    timeSlot: "Tarde",
  },
  {
    id: 10,
    image: "https://plus.unsplash.com/premium_photo-1683134297492-cce5fc6dae31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Terapia de Reflexología",
    responsible: "Ana López",
    time: "8:00 PM",
    type: "Masaje",
    timeSlot: "Noche",
  },
]);

const searchQuery = ref("");
const selectedActivityType = ref(null);
const selectedTimeSlot = ref(null);
const selectedResponsible = ref(null);

// Opciones de filtro
const activityTypes = ref(["Masaje", "Terapia facial", "Cuidado de la piel"]);
const timeSlots = ref(["Mañana", "Tarde", "Noche"]);
const responsibles = ref(["Juan Pérez", "Ana López", "Carlos Díaz"]);

// Filtros y paginación
const filteredServices = computed(() =>
  services.value.filter(
    (service) =>
      (searchQuery.value === "" || service.title.toLowerCase().includes(searchQuery.value.toLowerCase())) &&
      (!selectedActivityType.value || service.type === selectedActivityType.value) &&
      (!selectedTimeSlot.value || service.timeSlot === selectedTimeSlot.value) &&
      (!selectedResponsible.value || service.responsible === selectedResponsible.value)
  )
);

const itemsPerPage = 8;
const first = ref(0);

const paginatedServices = computed(() =>
  filteredServices.value.slice(first.value, first.value + itemsPerPage)
);

function onPageChange(event) {
  first.value = event.first;
}

function filterResults() {
  first.value = 0; // Reiniciar a la primera página al aplicar filtros
}
</script>

  
  <style scoped>
  .search-container{
    display: flex;
    justify-content: space-around;
    align-items: baseline;
  }
  .probando{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    background-image: url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');  
}
  .services-view {
    padding: 2rem;
    background: #fff;
  }
  
  .filters {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .search-bar {
    width: 100%;
  }
  
  .filter-options {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
  
  .service-card {
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
  }
  
  .service-image {
    max-width: 100%;
    height: 165px;
    border-radius: 5px;
  }
  
  .service-details h4 {
    color: #f9a392;
    margin: 0.5rem 0;
  }
  
  .p-button-secondary {
    background: #f9a392;
    border: none;
  }
  </style>
  