<template>

<div  class="overflow-x-auto overflow-y-auto flex justify-center items-center flex-col" style="table-layout: fixed; padding: 50px; height: 600px;" >
          <h2 class="text-2xl font-semibold text-gray-900">All Activities</h2>

      <div class="mt-6 flex justify-end space-x-3 text-left" style="margin-bottom: 15px; margin-top: 0;">
        <button class="pi pi-plus px-4 py-2 rounded-lg transition duration-300 shadow-md" style="background-color: rgb(249, 163, 146); color: black; margin: 20px;" @click="openAddModal">

        </button>
      </div>
      

          <div class="bg-white shadow rounded-lg overflow-hidden overflow-y-auto" style="height: 500px;">
            
            <table class="min-w-full divide-y divide-gray-200 table-bordered overflow-y-auto"  style="border-collapse: collapse;">
              <thead class="bg-gray-50">
              <tr style="background-color: rgb(249, 163, 146); color: black; width: 200px;">
                <th class="p-3 text-left font-semibold " style="width: 50px;">#</th>
                <th class="p-3 text-left font-semibold " >Name</th>
                <th class="p-3 text-left font-semibold ">Time</th>
                <th class="p-3 text-left font-semibold ">Date</th>
                <th class="p-3 text-left font-semibold " style="width: 250px;" >Description</th>
                <th class="p-3 text-left font-semibold ">Specialist</th>
                <th class="p-3 text-left font-semibold ">Clients</th>
               <th class="p-3 text-left font-semibold " style="width: 50px !important;"> Actions</th>
              </tr>
              </thead>

              <tbody class="bg-white divide-y divide-gray-200">
              <tr  v-for="dato in datos" :key="dato.id">
                <td class="p-3 font-medium" style="color: #000;">{{ dato.id }}</td>
                <td class="p-3 font-medium" style="color: #000;">{{ dato.nombre }}</td>
                <td class="p-3 font-medium" style="color: #000;">{{ dato.hora}}</td>
                <td class="p-3 font-medium" style="color: #000;">{{ dato.fecha }}</td>
                <td class="p-3 font-medium" style="color: #000; width: 300px; text-align: justify;">{{ dato.descripcion }}</td>
                <td class="p-3 font-medium" style="color: #000;">{{ dato.especialista.nombre }}</td>
                <td class="p-3 font-medium" style="color: #000;">{{ dato.clientes_nombres }}</td>
                <td class="px-6 py-4 whitespace-nowrap space-x-2">
                  <button class="pi pi-pencil text-gray-600 hover:text-rose-800" style="margin:20px" @click="openEditModal(dato)"></button>
                  <button class="pi pi-trash text-gray-600 hover:text-gray-800" style="margin:20px" @click="deleteService(dato.id)"></button>
                </td>
            
            </tr>
              </tbody>
            </table>

    <!-- Modal para agregar o editar datos-->
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
    </div>

     
    </div>

    
</div>




</template>

<script setup>

import { ref, onMounted, reactive } from 'vue';
import Tag from 'primevue/tag';
import Button from 'primevue/button'
import { servicioService } from '../services/servicioService';

// Estado para los servicios y carga

const datos = ref([]); // Inicialmente vacío
const isLoading = ref(false);
const error = ref(null);

// Cargar servicios desde el backend

async function cargarAdmin() {
    isLoading.value = true; 
    error.value = null;

    try {

    const response = await servicioService.getAll();
    
    datos.value = response.data.map(dato => ({
        ...dato
       }));
  
    } catch (err) {
      error.value = 'Error al cargar los servicios: ' + err.message;
    } finally {
      isLoading.value = false;
    }
};

// Llamar a cargarServicios al montar el componente
 
onMounted(cargarAdmin);


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


const openEditModal = (user) => {
  
    editUserForm.id=user.id;
    editUserForm.nombre=user.nombre;
    editUserForm.descripcion=user.descripcion;
    editUserForm.precio=user.precio;
    editUserForm.fecha=user.fecha;
    editUserForm.tipo=user.tipo;
    editUserForm.especialista.nombre=user.especialista.nombre;
    editUserForm.categoria.name=user.categoria.name;
    showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const updateService = async () => {

    try {
    
    await servicioService.update(editUserForm.id, editUserForm);
    
    cargarAdmin();
    closeModal();
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
  }
  

  
};


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