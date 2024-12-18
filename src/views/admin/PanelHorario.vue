<template>
  <div class="container mx-auto p-4 min-h-screen">
    <h1 class="text-4xl font-bold text-center mb-8" style="color: #000000;">
      Horario Semanal de Actividades
    </h1>

    <div class="overflow-hidden shadow-xl rounded-lg" style="background-color: #fff;">
      <div class="overflow-x-auto">
        <table class="w-full bg-gary-50 divide-y divide-gray-200 table table-bordered overflow-y-auto"  style=" max-height: 400px ;border-collapse: collapse;">
          <thead>
          <tr style="background-color: rgb(249, 163, 146); color: #fff;">
            <th class="p-3 text-left font-semibold">Hora</th>
            <th v-for="day in days" :key="day.name" class="p-3 text-left font-semibold">{{ day.name }}</th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="(schedule, index) in schedules"
              :key="index"
              style="border-bottom: 1px solid #ccc;"
              class="hover:bg-gray-50 transition duration-300"
          >
            <td class="p-3 font-medium" style="color: #000;">{{ schedule.time }}</td>
            <td v-for="day in days" :key="day.name" class="p-3" style="color: #000;">
              <div
                  v-if="schedule[day.key]"
                  @click="selectActivity(schedule[day.key], schedule.time, day.name)"
                  class="flex items-center space-x-2 cursor-pointer p-2 rounded-lg transition duration-300 transform hover:scale-105"
                  :style="isSelected(schedule[day.key]) ? 'background-color: rgb(249, 163, 146); color: #fff;' : 'background-color: #f9f9f9; color: #000;'"
              >
                <img
                    :src="`/img/${schedule[day.key].image}`"
                    :alt="schedule[day.key].name"
                    class="w-12 h-12 rounded-full object-cover shadow-md"
                />
                <span class="text-sm font-medium">{{ schedule[day.key].name }}</span>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mt-6 flex justify-end space-x-3">
      <button
          @click="showAddModal"
          class="px-4 py-2 rounded-lg transition duration-300 shadow-md"
          style="background-color: rgb(249, 163, 146); color: #fff;"
      >
        Agregar Actividad
      </button>
      <button
          @click="cancelActivity"
          :disabled="!selectedActivity"
          class="px-4 py-2 rounded-lg transition duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          style="background-color: rgb(249, 163, 146); color: #fff;"
      >
        Cancelar Actividad
      </button>
      <button
          @click="showChangeModal"
          :disabled="!selectedActivity"
          class="px-4 py-2 rounded-lg transition duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          style="background-color: rgb(249, 163, 146); color: #fff;"
      >
        Cambiar Actividad
      </button>
      <button
          @click="showDetails"
          :disabled="!selectedActivity"
          class="px-4 py-2 rounded-lg transition duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          style="background-color: rgb(249, 163, 146); color: #fff;"
      >
        Ver Detalles
      </button>
    </div>

    <!-- Modal de Detalles -->
    <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="isModalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div class="rounded-lg shadow-2xl p-6 w-full max-w-md" style="background-color: #fff;">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold" style="color: rgb(249, 163, 146);">Detalles de la Actividad</h2>
            <button @click="closeModal" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
          </div>
          <div v-if="selectedActivity" class="space-y-4">
            <img
                :src="`/img/${selectedActivity.image}`"
                :alt="selectedActivity.name"
                class="w-full h-56 object-cover rounded-lg shadow-md"
            />
            <p class="font-semibold text-lg" style="color: rgb(249, 163, 146);">{{ selectedActivity.name }}</p>
            <p><strong class="text-gray-700">Tipo de Servicio:</strong> {{ selectedActivity.serviceType }}</p>
            <p><strong class="text-gray-700">Descripción:</strong> {{ selectedActivity.descripcion }}</p>
            <p><strong class="text-gray-700">Ubicación en el Spa:</strong> {{ selectedActivity.spaLocation }}</p>
            <p><strong class="text-gray-700">Máximo de Participantes:</strong> {{ selectedActivity.maxParticipants }}</p>
          </div>
        </div>
      </div>
    </transition>

    <!-- Modal de Agregar Actividad -->
    <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="isAddModalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div class="rounded-lg shadow-2xl p-6 w-full max-w-md" style="background-color: #fff;">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold" style="color: rgb(249, 163, 146);">Agregar Nueva Actividad</h2>
            <button @click="closeAddModal" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
          </div>
          <form @submit.prevent="addActivity" class="space-y-4">
            <div>
              <label for="newActivityName" class="block text-sm font-medium text-gray-700">Nombre de la Actividad</label>
              <input
                  v-model="newActivity.name"
                  id="newActivityName"
                  type="text"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label for="newActivityType" class="block text-sm font-medium text-gray-700">Tipo de Servicio</label>
              <input
                  v-model="newActivity.serviceType"
                  id="newActivityType"
                  type="text"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label for="newActivityDescription" class="block text-sm font-medium text-gray-700">Descripción</label>
              <textarea
                  v-model="newActivity.descripcion"
                  id="newActivityDescription"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              ></textarea>
            </div>
            <div>
              <label for="newActivityLocation" class="block text-sm font-medium text-gray-700">Ubicación en el Spa</label>
              <input
                  v-model="newActivity.spaLocation"
                  id="newActivityLocation"
                  type="text"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label for="newActivityParticipants" class="block text-sm font-medium text-gray-700">Máximo de Participantes</label>
              <input
                  v-model="newActivity.maxParticipants"
                  id="newActivityParticipants"
                  type="number"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <button
                type="submit"
                class="w-full px-4 py-2 rounded-lg transition duration-300 shadow-md"
                style="background-color: rgb(249, 163, 146); color: #fff;"
            >
              Agregar Actividad
            </button>
          </form>
        </div>
      </div>
    </transition>

    <!-- Modal de Cambiar Actividad -->
    <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="isChangeModalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div class="rounded-lg shadow-2xl p-6 w-full max-w-md" style="background-color: #fff;">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold" style="color: rgb(249, 163, 146);">Cambiar Actividad</h2>
            <button @click="closeChangeModal" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
          </div>
          <form @submit.prevent="changeActivity" class="space-y-4">
            <div>
              <label for="changeActivityName" class="block text-sm font-medium text-gray-700">Nombre de la Actividad</label>
              <input
                  v-model="selectedActivity.name"
                  id="changeActivityName"
                  type="text"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label for="changeActivityType" class="block text-sm font-medium text-gray-700">Tipo de Servicio</label>
              <input
                  v-model="selectedActivity.serviceType"
                  id="changeActivityType"
                  type="text"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label for="changeActivityDescription" class="block text-sm font-medium text-gray-700">Descripción</label>
              <textarea
                  v-model="selectedActivity.descripcion"
                  id="changeActivityDescription"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              ></textarea>
            </div>
            <div>
              <label for="changeActivityLocation" class="block text-sm font-medium text-gray-700">Ubicación en el Spa</label>
              <input
                  v-model="selectedActivity.spaLocation"
                  id="changeActivityLocation"
                  type="text"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label for="changeActivityParticipants" class="block text-sm font-medium text-gray-700">Máximo de Participantes</label>
              <input
                  v-model="selectedActivity.maxParticipants"
                  id="changeActivityParticipants"
                  type="number"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <button
                type="submit"
                class="w-full px-4 py-2 rounded-lg transition duration-300 shadow-md"
                style="background-color: rgb(249, 163, 146); color: #fff;"
            >
              Guardar Cambios
            </button>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';


const days = [
  { name: 'Lunes', key: 'lunes' },
  { name: 'Martes', key: 'martes' },
  { name: 'Miércoles', key: 'miercoles' },
  { name: 'Jueves', key: 'jueves' },
  { name: 'Viernes', key: 'viernes' },
  { name: 'Sábado', key: 'sabado' },
];

const schedules = ref([
  {
    time: '9:00-10:00 AM',
    lunes: null,
    martes: {
      name: 'Masaje Relajante',
      image: 'service-6.jpg',
      serviceType: 'Masaje',
      spaLocation: 'Sala de Masajes',
      maxParticipants: 1,
      descripcion: 'Relájese con un suave masaje...',
    },
    miercoles: {
      name: 'Limpieza Facial Profunda',
      image: 'service-2.jpg',
      descripcion: 'Disfrute de una limpieza profunda...',
      serviceType: 'Facial',
      spaLocation: 'Sala de Tratamientos Faciales',
      maxParticipants: 1,
    },
    jueves: null,
    viernes: null,
    sabado: null,
  },
  {
    time: '10:00-11:00 AM',
    lunes: {
      name: 'Limpieza Facial Profunda',
      image: 'service-2.jpg',
      descripcion: 'Disfrute de una limpieza profunda...',
      serviceType: 'Facial',
      spaLocation: 'Sala de Tratamientos Faciales',
      maxParticipants: 1,
    },
    martes: null,
    miercoles: {
      name: 'Masaje Relajante',
      image: 'service-6.jpg',
      serviceType: 'Masaje',
      spaLocation: 'Sala de Masajes',
      maxParticipants: 1,
      descripcion: 'Relájese con un suave masaje...',
    },
    jueves: {
      name: 'Masaje Deportivo',
      image: 'service-6.jpg',
      serviceType: 'Masaje',
      spaLocation: 'Sala de Masajes',
      maxParticipants: 1,
      descripcion: 'Diseñado para atletas...',
    },
    viernes: null,
    sabado: null,
  },
  {
    time: '11:00AM -12:00 PM',
    lunes: null,
    martes: {
      name: 'Tratamiento Hidratante',
      image: 'service-5.jpg',
      serviceType: 'Facial',
      spaLocation: 'Sala de Tratamientos Faciales',
      maxParticipants: 1,
      descripcion: 'Este servicio se enfoca en...',
    },
    miercoles: null,
    jueves: {
      name: 'Manicura Spa con Masaje',
      image: 'service-6.jpg',
      serviceType: 'Manicura',
      spaLocation: 'Área de Manicura',
      maxParticipants: 1,
      descripcion: 'Disfrute de una experiencia indulgente...',
    },
    viernes: {
      name: 'Pedicura Spa con Masaje',
      image: 'service-5.jpg',
      serviceType: 'Pedicura',
      spaLocation: 'Área de Pedicura',
      maxParticipants: 1,
      descripcion: 'Este tratamiento eleva la pedicura...',
    },
    sabado: {
      name: 'Manicura Spa con Masaje',
      image: 'service-6.jpg',
      serviceType: 'Manicura',
      spaLocation: 'Área de Manicura',
      maxParticipants: 1,
      descripcion: 'Disfrute de una experiencia indulgente...',
    },
  },
]);

const selectedActivity = ref(null);
const selectedTime = ref('');
const selectedDay = ref('');
const isModalVisible = ref(false);
const isAddModalVisible = ref(false);
const isChangeModalVisible = ref(false);

const newActivity = reactive({
  name: '',
  image: 'service-1.jpg', // imagen por defecto
  serviceType: '',
  spaLocation: '',
  maxParticipants: 1,
  descripcion: '',
});

const selectActivity = (activity, time, day) => {
  selectedActivity.value = activity;
  selectedTime.value = time;
  selectedDay.value = day;
};

const isSelected = (activity) => {
  return selectedActivity.value === activity;
};

const showDetails = () => {
  if (selectedActivity.value) {
    isModalVisible.value = true;
  }
};

const closeModal = () => {
  isModalVisible.value = false;
};

const showAddModal = () => {
  isAddModalVisible.value = true;
};

const closeAddModal = () => {
  isAddModalVisible.value = false;
  Object.assign(newActivity, {
    name: '',
    image: 'service-1.jpg',
    serviceType: '',
    spaLocation: '',
    maxParticipants: 1,
    descripcion: '',
  });
};

const addActivity = () => {
  // Lógica sencilla: agregar la actividad al primer espacio libre
  for (let schedule of schedules.value) {
    for (let day of days) {
      if (!schedule[day.key]) {
        schedule[day.key] = { ...newActivity };
        closeAddModal();
        return;
      }
    }
  }
  alert('No hay espacios disponibles para agregar la actividad.');
};

const showChangeModal = () => {
  if (selectedActivity.value) {
    isChangeModalVisible.value = true;
  }
};

const closeChangeModal = () => {
  isChangeModalVisible.value = false;
};

const changeActivity = () => {
  // Ya se están modificando los datos en tiempo real a través de v-model
  closeChangeModal();
};

const cancelActivity = () => {
  if (selectedActivity.value && selectedTime.value && selectedDay.value) {
    const dayObj = days.find((day) => day.name === selectedDay.value);
    if (dayObj) {
      const timeSlot = schedules.value.find((schedule) => schedule.time === selectedTime.value);
      if (timeSlot) {
        timeSlot[dayObj.key] = null;
        selectedActivity.value = null;
        selectedTime.value = '';
        selectedDay.value = '';
      }
    }
  }
};
</script>

<style scoped>
/* Puedes agregar estilos específicos aquí si es necesario */
</style>
