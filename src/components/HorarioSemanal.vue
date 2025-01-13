<template>
  <div class="container mx-auto p-4 min-h-screen" style="">
    <h1 class="text-4xl font-bold text-center mb-1" style="color: #000000;">
      Weekly Activity Schedule
    </h1>

    <div class="mt-6 flex justify-end space-x-3">
      <button
          @click="showAddModal"
          class="px-4 py-2 rounded-lg transition duration-300 shadow-md"
          style="background-color: rgb(249, 163, 146); color: black;"
      >
        Add Activity
      </button>
      
      
      <button
          @click="showDetails"
          :disabled="!selectedActivity"
          class="px-4 py-2 rounded-lg transition duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          style="background-color:salmon; color: black"
      >
        Activity Details
      </button>
      <button
          @click="showChangeModal"
          :disabled="!selectedActivity"
          class="px-4 py-2 rounded-lg transition duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          style="background-color:rgb(240, 99, 99); color: black;"
      >
        Change Activity
      </button>
      <button
          @click="cancelActivity"
          :disabled="!selectedActivity"
          class="px-4 py-2 rounded-lg transition duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          style="background-color:indianred; color:black;"
      >
        Cancel Activity
      </button>
    </div>

    <div class="overflow-hidden shadow-xl rounded-lg" style="background-color: #fff; padding-top: 0;">
      <div class="overflow-x-auto overflow-y-auto" style="max-height: 400px;">
        <table class="w-full bg-gary-50 divide-y divide-gray-200 table table-bordered overflow-y-auto"  style="border-collapse: collapse;">
          <thead>
          <tr style="background-color: rgb(249, 163, 146); color: black;">
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
                  :style="isSelected(schedule[day.key]) ? 'background-color: rgb(249, 163, 146); color: #fff;' : 'background-color: #f1cfbb; color: #000;'"
              >
                <img
                    :src="`src/img/${schedule[day.key].image}`"
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

    

    <!-- Modal de Detalles -->
    <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="isModalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" >
        <div class="rounded-lg shadow-2xl p-6 max-w-md" style="background-color: #fff; height: 500px ; overflow: auto; margin-top: 25px;">
          <div class="flex justify-between items-center mb-4" >
            <h2 class="text-2xl font-bold" style="color: rgb(249, 163, 146);">Activity Details</h2>
            <button @click="closeModal" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
          </div>
          <div v-if="selectedActivity" class="space-y-4">
            <img
                :src="`src/img/${selectedActivity.image}`"
                :alt="selectedActivity.name"
                class="w-full h-56 object-cover rounded-lg shadow-md"
            />
            <p class="font-semibold text-lg" style="color: rgb(249, 163, 146);">{{ selectedActivity.name }}</p>
            <p><strong class="text-gray-700">Service Type:</strong> {{ selectedActivity.serviceType }}</p>
            <p><strong class="text-gray-700">Description:</strong> {{ selectedActivity.descripcion }}</p>
            <p><strong class="text-gray-700">Spa Location:</strong> {{ selectedActivity.spaLocation }}</p>
            <p><strong class="text-gray-700">Max Partipants:</strong> {{ selectedActivity.maxParticipants }}</p>
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
            <h2 class="text-2xl font-bold" style="color: rgb(249, 163, 146);">Add New Activity</h2>
            <button @click="closeAddModal" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
          </div>
          <form @submit.prevent="addActivity" class="space-y-4">
            <div>
              <label for="newActivityName" class="block text-sm font-medium text-gray-700">Activity Name</label>
              <input
                  v-model="newActivity.name"
                  id="newActivityName"
                  type="text"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
              
            </div>
            <div>
              <label for="newActivityType" class="block text-sm font-medium text-gray-700">service Type</label>
              <select 
              v-model="newActivity.serviceType"
                  id="newActivityType"
                  type="text"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" >
                <option v-for="service in services" :key="service.key" class="block text-sm font-medium text-gray-700 mt-1 block w-full rounded-md border-gray-300 shadow-sm">{{service.name}}</option>
              </select>
            </div>
            <div>
              <label for="newActivityDescription" class="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                  v-model="newActivity.descripcion"
                  id="newActivityDescription"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              ></textarea>
            </div>
            <div>
              <label for="newActivityLocation" class="block text-sm font-medium text-gray-700">Spa Location</label>
              <select v-model="newActivity.spaLocation"
                  id="newActivityLocation"
                  type="text"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" >
                <option v-for="ubicacio in ubicacion" :key="ubicacio.key" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">{{ubicacio.name}}</option>
              </select>
            </div>
            <div>
              <label for="newActivityParticipants" class="block text-sm font-medium text-gray-700">Max de Participants</label>
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
              Add Activity
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
              <select 
              v-model="selectedActivity.serviceType"
                  id="changeActivityType"
                  type="text"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" >
                <option v-for="service in services" :key="service.key" class="block text-sm font-medium text-gray-700 mt-1 block w-full rounded-md border-gray-300 shadow-sm">{{service.name}}</option>
              </select>
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
              <select v v-model="selectedActivity.spaLocation"
                  id="changeActivityLocation"
                  type="text"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" >
                <option v-for="ubicacio in ubicacion" :key="ubicacio.key" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">{{ubicacio.name}}</option>
              </select>
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
              Save Changes
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
  { name: 'Monday', key: 'lunes' },
  { name: 'Tuesday', key: 'martes' },
  { name: 'Wednesday', key: 'miercoles' },
  { name: 'Thursday', key: 'jueves' },
  { name: 'Friday', key: 'viernes' },
  { name: 'Saturday', key: 'sabado' },
];

const schedules = ref([
  {
    time: '9:00-10:00 AM',
    lunes: null,
    martes: {
      name: "Relaxing Facial Massage",
                image: 'relaxingFacilaMassage.jpg', 
                serviceType: "Massage",
                spaLocation: "Massage Room",
                maxParticipants: 1,
                descripcion:'Relax with a gentle massage that stimulates circulation and relieves tension in facial muscles. This treatment not only improves the appearance of the skin but also provides a deep sense of well-being',
              
    },
    miercoles: {
      name: "Deep Cleansing Facial", 
              image: 'deepCleanFacial.jpg',
              descripcion:'Enjoy a thorough cleansing that removes impurities and dead skin cells, leaving your skin fresh and radiant. This treatment is ideal for improving skin texture and preventing acne breakouts, all under the care of our expert estheticians.',  
              serviceType: "Face",
              spaLocation: "Facial Treatment Room",
              maxParticipants: 1 
    },
    jueves: null,
    viernes: null,
    sabado: null,
  },
  {
    time: '10:00-11:00 AM',
    lunes: {
      name: "Deep Cleansing Facial", 
            image: 'deepCleanFacial.jpg',
            descripcion:'Enjoy a thorough cleansing that removes impurities and dead skin cells, leaving your skin fresh and radiant. This treatment is ideal for improving skin texture and preventing acne breakouts, all under the care of our expert estheticians.',  
            serviceType: "Face",
            spaLocation: "Facial Treatment Room",
            maxParticipants: 1
    },
    martes: null,
    miercoles: {
      name: "Relaxing Facial Massage",
                image: 'relaxingFacilaMassage.jpg', 
                serviceType: "Massage",
                spaLocation: "Massage Room",
                maxParticipants: 1,
                descripcion:'Relax with a gentle massage that stimulates circulation and relieves tension in facial muscles. This treatment not only improves the appearance of the skin but also provides a deep sense of well-being',
    
    },
    jueves: {
      name: "Sports Massage",
                image: 'sportsmassage.jpg',
                serviceType: "Massage",
                spaLocation: "Massage Room",
                maxParticipants: 1,
                descripcion:'Designed for athletes and sports enthusiasts, this massage focuses on preparing and recovering muscles after exercise. It accelerates recovery and reduces the risk of injuries, all under the guidance of our specialized massage therapists.',
   
    },
    viernes: null,
    sabado: null,
  },
  {
    time: '11:00AM -12:00 PM',
    lunes: null,
    martes: {
      name: "Hydrating Treatment", 
              image: 'hydratingTreatment.jpg',
              serviceType: "Face",
              spaLocation: "Facial Treatment Room",
              maxParticipants: 1,
              descripcion:'This service focuses on applying specific moisturizing products for your skin type, revitalizing it and leaving it soft and luminous. Our estheticians will customize the experience to meet your individual needs.',

              
    },
    miercoles: null,
    jueves: {
      name: "Spa Manicure with Massage",
                image: 'manicureMassage.jpg',
                serviceType: "Manicure",
                spaLocation: "Manicure Area",
                 maxParticipants: 1,
                 descripcion:'Enjoy an indulgent experience that combines nail care with a relaxing hand massage. Perfect for those seeking a moment of luxury and relaxation.',

             
    },
    viernes: {
      name: "Deep Tissue Massage",
                image: 'deepTisuueMassage.jpg',
                serviceType: "Massage",
                spaLocation: "Massage Room",
                maxParticipants: 1,
                descripcion:'  This massage focuses on the deeper layers of muscles, relieving chronic tension and improving mobility. It is ideal for those suffering from persistent muscle pain.',

    },
    sabado: {
      name: "Yoga Classes",
             image: 'yoga.jpg',
             serviceType: "Group Activity",
             spaLocation: "Yoga Studio",
             maxParticipants: 10,
             descripcion: 'Join our group yoga or meditation classes, where you will learn to connect with your body and mind, improving flexibility and reducing stress.',
           
    },
  },

  {
    time: '12:00PM -1:00 PM',
    lunes: null,
    martes: {
      name: "Hydrating Treatment", 
              image: 'hydratingTreatment.jpg',
              serviceType: "Face",
              spaLocation: "Facial Treatment Room",
              maxParticipants: 1,
              descripcion:'This service focuses on applying specific moisturizing products for your skin type, revitalizing it and leaving it soft and luminous. Our estheticians will customize the experience to meet your individual needs.',

              
    },
    miercoles: null,
    jueves: {
      name: "Spa Manicure with Massage",
                image: 'manicureMassage.jpg',
                serviceType: "Manicure",
                spaLocation: "Manicure Area",
                 maxParticipants: 1,
                 descripcion:'Enjoy an indulgent experience that combines nail care with a relaxing hand massage. Perfect for those seeking a moment of luxury and relaxation.',

             
    },
    viernes: {
      name: "Deep Tissue Massage",
                image: 'deepTisuueMassage.jpg',
                serviceType: "Massage",
                spaLocation: "Massage Room",
                maxParticipants: 1,
                descripcion:'  This massage focuses on the deeper layers of muscles, relieving chronic tension and improving mobility. It is ideal for those suffering from persistent muscle pain.',

    },
    sabado: {
      name: "Yoga Classes",
             image: 'yoga.jpg',
             serviceType: "Group Activity",
             spaLocation: "Yoga Studio",
             maxParticipants: 10,
             descripcion: 'Join our group yoga or meditation classes, where you will learn to connect with your body and mind, improving flexibility and reducing stress.',
           
    },
  },
  {
    time: '2:00PM -3:00 PM',
    lunes: null,
    martes: {
      name: "Hydrating Treatment", 
              image: 'hydratingTreatment.jpg',
              serviceType: "Face",
              spaLocation: "Facial Treatment Room",
              maxParticipants: 1,
              descripcion:'This service focuses on applying specific moisturizing products for your skin type, revitalizing it and leaving it soft and luminous. Our estheticians will customize the experience to meet your individual needs.',

              
    },
    miercoles: null,
    jueves: {
      name: "Spa Manicure with Massage",
                image: 'manicureMassage.jpg',
                serviceType: "Manicure",
                spaLocation: "Manicure Area",
                 maxParticipants: 1,
                 descripcion:'Enjoy an indulgent experience that combines nail care with a relaxing hand massage. Perfect for those seeking a moment of luxury and relaxation.',

             
    },
    viernes: {
      name: "Deep Tissue Massage",
                image: 'deepTisuueMassage.jpg',
                serviceType: "Massage",
                spaLocation: "Massage Room",
                maxParticipants: 1,
                descripcion:'  This massage focuses on the deeper layers of muscles, relieving chronic tension and improving mobility. It is ideal for those suffering from persistent muscle pain.',

    },
    sabado: {
      name: "Yoga Classes",
             image: 'yoga.jpg',
             serviceType: "Group Activity",
             spaLocation: "Yoga Studio",
             maxParticipants: 10,
             descripcion: 'Join our group yoga or meditation classes, where you will learn to connect with your body and mind, improving flexibility and reducing stress.',
           
    },
  },
  {
    time: '3:00PM -4:00 PM',
    lunes: null,
    martes: {
      name: "Hydrating Treatment", 
              image: 'hydratingTreatment.jpg',
              serviceType: "Face",
              spaLocation: "Facial Treatment Room",
              maxParticipants: 1,
              descripcion:'This service focuses on applying specific moisturizing products for your skin type, revitalizing it and leaving it soft and luminous. Our estheticians will customize the experience to meet your individual needs.',

              
    },
    miercoles: null,
    jueves: {
      name: "Spa Manicure with Massage",
                image: 'manicureMassage.jpg',
                serviceType: "Manicure",
                spaLocation: "Manicure Area",
                 maxParticipants: 1,
                 descripcion:'Enjoy an indulgent experience that combines nail care with a relaxing hand massage. Perfect for those seeking a moment of luxury and relaxation.',

             
    },
    viernes: {
      name: "Deep Tissue Massage",
                image: 'deepTisuueMassage.jpg',
                serviceType: "Massage",
                spaLocation: "Massage Room",
                maxParticipants: 1,
                descripcion:'  This massage focuses on the deeper layers of muscles, relieving chronic tension and improving mobility. It is ideal for those suffering from persistent muscle pain.',

    },
    sabado: {
      name: "Yoga Classes",
             image: 'yoga.jpg',
             serviceType: "Group Activity",
             spaLocation: "Yoga Studio",
             maxParticipants: 10,
             descripcion: 'Join our group yoga or meditation classes, where you will learn to connect with your body and mind, improving flexibility and reducing stress.',
           
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

const servicesName = [
  { name: 'Yoga Classes', key: 'yoga' },
  { name: 'Deep Tissue Massage', key: 'deep' },
  { name: 'Spa Manicure with Massage', key: 'manicure' },
  { name: 'Spa Pedicure with Massage', key: 'pedicure' },
  { name: 'Hydrating Treatment', key: 'hidra' },
  { name: 'Sports Massage', key: 'sports' },
];

const services = [
  { name: 'Group Activity', key: 'group' },
  { name: 'Massage', key: 'masage' },
  { name: 'Manicure', key: 'manicure' },
  { name: 'Pedicure', key: 'pedicure' },
  { name: 'Face', key: 'face' },
  { name: 'Sports Massage', key: 'sports' },
];

const ubicacion = [
  { name: 'Massage Room', key: 'massageRomm' },
  { name: 'Yoga Studio', key: 'yogae' },
  { name: 'Manicure Area', key: 'manicurea' },
  { name: 'Pedicure Area', key: 'pedicurea' },
  { name: 'Facial Treatment Room', key: 'facet' },
  
];

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

</style>
