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
        <Button label="Exportar a PDF" class="p-button-secondary" @click="exportarPDF" />

      </div>
    </div>
   
    <!-- Lista de servicios con paginación o esqueleto -->
    <div class="services-grid">
      <!-- Mostrar SkeletonCards si isLoading es true -->
      
        <div v-if="isLoading" v-for="n in 8" :key="n" class="service-card">
          <SkeletonCard />
        </div>
     
        <div v-else v-for="(service, index) in paginatedServices" :key="index" class="service-card">
          <FlipCard :id="service.id"
                    :tipo="'servicio'" 
                    :name="service.nombre"
                    :image="service.imagen"
                    :description="service.descripcion" 
                    :price="service.precio" 
                    :duration="service.duracion"
                    :fecha="service.fecha"
                    :categoria="service.categoria.name"
                    :horario="service.hora"></FlipCard>
        </div>
     
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
import FlipCard from '../components/FlipCard.vue';
import Section from '../primeVue-components/Section.vue';
import { ref, computed, onMounted } from "vue";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import Paginator from "primevue/paginator";
import SkeletonCard from '../components/SkeletonCard.vue';
import { servicioService } from '../services/servicioService.js'; // Importar el servicio
import { jsPDF } from 'jspdf';

function exportarPDF() {
  const doc = new jsPDF();

  // Título del documento
  doc.setFontSize(18);
  doc.text('Lista de Servicios', 20, 20);

  // Configurar el estilo de la tabla
  doc.setFontSize(12);
  const startY = 30;
  const lineHeight = 10;
  const columnWidths = [40, 60, 40, 40]; // Anchos de las columnas
  const headers = ['Nombre', 'Descripción', 'Precio', 'Duración'];

  // Dibujar encabezados
  let x = 20;
  headers.forEach((header, index) => {
    doc.text(header, x, startY);
    x += columnWidths[index];
  });

  // Dibujar filas de servicios
  let y = startY + lineHeight;
  services.value.forEach(service => {
    x = 20;
    doc.text(service.nombre, x, y);
    x += columnWidths[0];
    doc.text(service.descripcion, x, y);
    x += columnWidths[1];
    doc.text(service.precio.toString(), x, y);
    x += columnWidths[2];
    doc.text(service.duracion.toString(), x, y);
    y += lineHeight;
  });

  // Guardar el documento como archivo PDF
  doc.save('lista_de_servicios.pdf');
}


// Estado para los servicios y carga
const services = ref([]); // Inicialmente vacío
const isLoading = ref(false);
const error = ref(null);

// Filtros
const searchQuery = ref("");
const selectedActivityType = ref(null);
const selectedTimeSlot = ref(null);
const selectedResponsible = ref(null);

// Opciones de filtro (puedes actualizarlas dinámicamente si el backend lo soporta)
const activityTypes = ref(["Masaje", "Terapia facial", "Cuidado de la piel"]);
const timeSlots = ref(["Mañana", "Tarde", "Noche"]);
const responsibles = ref(["Juan Pérez", "Ana López", "Carlos Díaz"]);

// Cargar servicios desde el backend
async function cargarServicios() {
isLoading.value = true; 
error.value = null;

try {
  const response = await servicioService.getAll(); // Llamada al servicio
  services.value = response.data.map(service => ({
    ...service,
    image: 'https://media.istockphoto.com/id/1321098763/photo/beautiful-young-woman-working-on-computer-technology-people-work-study-concept.jpg?s=1024x1024&w=is&k=20&c=4pVirUSEiQoXI6nkCnq2cc9kqsViIRIbWM-lM31g9FI=', // Imagen por defecto si no hay
  }));
} catch (err) {
  error.value = 'Error al cargar los servicios: ' + err.message;
} finally {
  isLoading.value = false;
}
}

// Llamar a cargarServicios al montar el componente
onMounted(cargarServicios);

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
.search-container {
display: flex;
justify-content: space-around;
align-items: baseline;
}

.probando {
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
