<template>
  <Section title="My Services"/>
<div  class="overflow-x-auto overflow-y-auto flex justify-center items-center flex-col" style="table-layout: fixed; padding: 50px; height: 600px;" >
          <h2 class="text-2xl font-semibold text-gray-900">All Activities</h2>

      <div class="mt-6 flex justify-end space-x-3 text-left" style="margin-bottom: 15px; margin-top: 0;">
        <button class="pi pi-plus px-4 py-2 rounded-lg transition duration-300 shadow-md" style="background-color: rgb(249, 163, 146); color: black; margin: 20px;" @click="openEditModal()">

        </button>
      </div>
      

          <div class="bg-white shadow rounded-lg overflow-hidden overflow-y-auto" style="height: 500px;">
            
            <table class="min-w-full divide-y divide-gray-200 table-bordered overflow-y-auto"  style="border-collapse: collapse;">
              <thead class="bg-gray-50">
                <tr style="background-color: rgb(249, 163, 146); color: black; width: 200px;">
                  <th class="p-3 text-left font-semibold " >Name</th>
                  <th class="p-3 text-left font-semibold ">Date</th>
                  <th class="p-3 text-left font-semibold ">Time</th>
                  <th class="p-3 text-left font-semibold " style="width: 250px;" >Description</th>
                  <th class="p-3 text-left font-semibold ">Service Type</th>
                  <th class="p-3 text-left font-semibold ">Category</th>
                  <th class="p-3 text-left font-semibold ">Clientes</th>
                  <!-- <th class="p-3 text-left font-semibold " style="width: 50px !important;"> Actions</th> -->
                </tr>
              </thead>

              <tbody class="bg-white divide-y divide-gray-200">
                <tr  v-for="actividad in schedules" :key="actividad.id">
                  <td class="p-3 font-medium" style="color: #000;">{{ actividad.nombre }}</td>
                  <td class="p-3 font-medium" style="color: #000;">{{ actividad.fecha}}</td>
                  <td class="p-3 font-medium" style="color: #000;">{{ actividad.hora }}</td>
                  <td class="p-3 font-medium" style="color: #000; width: 300px; text-align: justify;">{{ actividad.descripcion }}</td>
                  <td class="p-3 font-medium" style="color: #000;">{{ actividad.tipo }}</td>
                  <td class="p-3 font-medium" style="color: #000;">{{ actividad.categoria.name }}</td>
                  <td class="p-3 font-medium" style="color: #000;">{{ actividad.clientes_nombres.length }}</td>
                  <!-- <td class="px-6 py-4 whitespace-nowrap space-x-2">
                    <Button class="btn text-rose-600 hover:text-rose-800" style="background-color:lightgoldenrodyellow !important" @click="startEdit(actividad)">Edit</button>
                    <Button class="btn text-gray-600 hover:text-gray-800" style="background: var(--p-tag-danger-background) !important;color: var(--p-tag-danger-color) !important;"@click="deleteRow(actividad)">Cancel</button>
                  </td> -->
                </tr>
              </tbody>
            </table>

    
   <!-- Modal de Agregar Actividad -->
    <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
        <div class="bg-white rounded-lg shadow-2xl p-6 w-full max-w-4xl mx-auto">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold text-[rgb(249,163,146)]">Edit Activity</h2>
            <button @click="closeModal" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
          </div>
          <form @submit.prevent="updateService" class="flex flex-col gap-4">
            <section class="flex gap-3">
              <div>
                <label for="newActivityDate" class="block text-sm font-medium text-gray-700">Fecha</label>
                <input
                    v-model="editUserForm.fecha"
                    id="newActivityDate"
                    type="date"
                    required
                    class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
                />
              </div>
              <div>
                <label for="newActivityTime" class="block text-sm font-medium text-gray-700">Hora</label>
                <select
                    v-model="editUserForm.hora"
                    id="newActivityTime"
                    required
                    class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
                >
                  <option value="">Selecciona una hora</option>
                  <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                  <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                  <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                  <option value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</option>
                  <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                  <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
                </select>
              </div>
              <div>
                <label for="newActivityName" class="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                    v-model="editUserForm.nombre"
                    id="newActivityName"
                    type="text"
                    required
                    class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
                />
              </div>
            </section>
            <section>
              <div>
                <label for="newActivityDescription" class="block text-sm font-medium text-gray-700">Descripción</label>
                <textarea
                    v-model="editUserForm.descripcion"
                    id="newActivityDescription"
                    required
                    class="mt-1 block w-4/5 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
                ></textarea>
              </div>

              

            </section>

            <section class="flex gap-3">
             

              <div>
                <label for="newActivityPrice" class="block text-sm font-medium text-gray-700">Precio</label>
                <input
                    v-model="editUserForm.precio"
                    id="newActivityPrice"
                    type="number"
                    step="0.01"
                    required
                    class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
                />
              </div>

              <div>
                <label for="newActivityType" class="block text-sm font-medium text-gray-700">Tipo</label>
                <select
                    v-model="editUserForm.tipo"
                    id="newActivityType"
                    required 
                    class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
                >
                 
                  <option value="individual">Individual</option>
                  <option value="grupal">Grupal</option>
                </select>
              </div>
              
            </section>

            
            <button
                type="submit"
                class="md:col-span-3 w-full px-4 py-2 bg-[rgb(249,163,146)] text-white rounded-lg transition duration-300 shadow-md hover:bg-[rgb(249,163,146)/90]"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </transition>


<!-- Modal para agregar o editar datos
    <div v-if="showModal" class="modal shadow-lg " style="align-items: center !important; align-content: center !important; justify-content: center;">
      <div class="modal-content" style="flex:auto ;  flex-direction: row; overflow-y:auto; justify-content: center;align-items: center !important; align-content: center !important; max-width: 470px;">
        <span style="align-items: center !important; justify-content: center;align-content: center !important;" class="close" @click="closeModal">&times;</span>
        <h2 class="text-2xl font-bold" style=" text-align:center; color: rgb(249, 163, 146);">Edit Service</h2>
        <form @submit.prevent="updateService" style="align-items: normal;  display:flex; flex-direction: column;">
            
            <div style="padding: 5px;">
              <label class="block text-sm font-medium text-gray-700">Service Name</label>
              <input
                  v-model="editUserForm.nombre"
                  type="text"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" style="border: solid 1px; border-color: indianred !important;"
              />
              
            </div>

            <div style="padding: 5px;">
              <label  class="block text-sm font-medium text-gray-700">Description</label>
              <input
                  v-model="editUserForm.descripcion"
                  type="text"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" style="border: solid 1px; border-color: indianred !important;"
              />
            </div>
            
           
          <button type="submit" class="px-4 py-2 rounded-lg transition duration-300 shadow-md" style="background-color: rgb(249, 163, 146); color: black; margin: 20px;" >Save Changes</button>
        </form>
      </div>
    </div>-->

     
    </div>

    
</div>




</template>

<script setup>

import { onMounted, ref, reactive } from 'vue';
import Tag from 'primevue/tag';
import Button from 'primevue/button'
import Section from "../primeVue-components/Section.vue";
import { servicioService } from '../services/servicioService';

const getSeverity = (status) => {
    switch (status) {
        case 'cancel':
            return 'danger';

        case 'done':
            return 'success';

        case 'pending':
            return 'info';


        case 'renewal':
            return null;
    }
};


const schedules = ref([]);

async function cargarServicios() {
      try {
        const response = await servicioService.getServiciosEspecialista(); // Llamada al servicio
        schedules.value = response.data
      } catch (err) {
        console.log(err)
      } finally {
        console.log("peticion finalizada")
      }
    }

//Eliminar servicio
const deleteService = async (userId) => {
  
  try {

    await servicioService.delete(userId);
    
    cargarAdmin();
  } catch (error) {
    console.error(`Error al eliminar el servicio con ID: ${userId}`, error);
  }
};

//Editar  servicio
const isEditMode = ref(false);
const showModal = ref(false);
const editUserForm = reactive({
  "id": null,
    "nombre": "",
    "descripcion": "",
    "precio": "",
    "fecha": "",
    
    "tipo": "",
    "especialista": {
      "id": null,
      "nombre": ""
    },
    "clientes_nombres": [
      ""
    ],
    "categoria": {
      "id": null,
      "name": ""
    },
   
});

const openEditModal = (user=null) => {
  if(user){
    editUserForm.id=user.id;
    editUserForm.nombre=user.nombre;
    editUserForm.descripcion=user.descripcion;
    editUserForm.precio=user.precio;
    editUserForm.fecha=user.fecha;
    editUserForm.tipo=user.tipo;
    editUserForm.especialista.nombre=user.especialista.nombre;
    editUserForm.categoria.name=user.categoria.name;
    showModal.value = true;
    isEditMode.value = true;
  }else{
    editUserForm.id='';
    editUserForm.nombre='';
    editUserForm.descripcion='';
    editUserForm.precio='';
    editUserForm.fecha='';
    editUserForm.tipo='';
    editUserForm.especialista.nombre='';
    editUserForm.categoria.name='Masaje';
    isEditMode.value = false;
  }
  
  showModal.value = true;
};



const closeModal = () => {
  showModal.value = false;
};

const updateService = async () => {

  if (isEditMode.value) {
    try {
    
    await servicioService.update(editUserForm.id, editUserForm);
    
    cargarServicios();
    closeModal();
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
  }
  } else {
    try {
    
    await servicioService.create(editUserForm);
    
    cargarServicios();
    closeModal();
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
  }
  }
  
};

onMounted(cargarServicios);
</script>

<style>

.btn{
    height: 30px !important;
    font-size:80% !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    background: var(--p-tag-primary-background) !important;
    color: var(--p-tag-primary-color) !important;
    font-size: var(--p-tag-font-size)!important;
    font-weight: var(--p-tag-font-weight)!important;
    padding: var(--p-tag-padding)!important;
    border-radius: var(--p-tag-border-radius)!important;
    gap: var(--p-tag-gap)!important;
    
}
/* Estilos para el modal */
.modal {
  display: block; /* Visible por defecto */
  position: fixed; 
  z-index: 1; 
  left: 0; 
  top: 0; 
  width: 90%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 80%; 
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal {
    display: block; /* Visible por defecto */
    position: fixed; 
    overflow: hidden;
    z-index: 1; 
    left: 0; 
    top: 0; 
    width: 100%; 
    height: 100%; 
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; 
    padding: 20px;
    border: 2px solid indianred;
    border-radius: 5px;
    width: 45%;
    height: 70%; 
    padding-bottom: 20px;
    margin-bottom: 20px;
    margin-top: 45px;
    box-shadow: inset 0px 0px 10px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.3);
    overflow: hidden;
  
  
  }

</style>

<!-- 
[

{ id: 1,
  name: "Relaxing Facial Massage",
  image: 'relaxingFacilaMassage.jpg', 
  serviceType: "Massage",
  spaLocation: "Massage Room",
  maxParticipants: 1,
  date:'2024-12-16',
  time: '9:00-10:00am',
  status: 'done',
  descripcion:'',
 },

 


{   id: 2,
    name: "Hydrating Treatment", 
          image: 'hydratingTreatment.jpg',
          serviceType: "Face",
          spaLocation: "Facial Treatment Room",
          maxParticipants: 1,
          date:'2024-12-17',
  time: '11:00am-12:00pm',
  status: 'cancel',
          descripcion:'This service focuses on applying specific moisturizing products for your skin type, revitalizing it and leaving it soft and luminous. Our estheticians will customize the experience to meet your individual needs.',

          
}, 

{ id: 3,
    name: "Spa Manicure with Massage",
            image: 'manicureMassage.jpg',
            serviceType: "Manicure",
            spaLocation: "Manicure Area",
             maxParticipants: 1,
             date:'2024-12-18',
  time: '11:00am-12:00pm',
  status: 'done',
             descripcion:'Enjoy an indulgent experience that combines nail care with a relaxing hand massage. Perfect for those seeking a moment of luxury and relaxation.',

          
},

{id: 4,
     name: "Spa Pedicure with Massage",
         image: 'pedicuremassage.jpg' ,
         serviceType: "Pedicure",
         spaLocation: "Pedicure Area",
         maxParticipants: 1,
         date:'2024-12-19',
  time: '11:00am-12:00pm',
  status: 'pending',
         descripcion:'This treatment elevates the traditional pedicure by including a foot massage, providing a total relaxation experience and leaving your feet soft and renewed.',

        
}, 

{id: 5,
     name: "Spa Manicure with Massage",
            image: 'manicureMassage.jpg',
            serviceType: "Manicure",
            spaLocation: "Manicure Area",
             maxParticipants: 1,
             date:'2024-12-20',
  time: '11:00am-12:00pm',
  status: 'pending',
             descripcion:'Enjoy an indulgent experience that combines nail care with a relaxing hand massage. Perfect for those seeking a moment of luxury and relaxation.',

}, -->

