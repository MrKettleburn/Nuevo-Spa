<template>

    
    <div>

        <select v-model="selectedUserType" @change="fetchUsers">
           <option value="especialistas">Especialistas</option>
           <option value="clientes">Clientes</option>
           <option value="admins">Administradores</option>
        </select>



        <table class="min-w-full divide-y divide-gray-200 table-bordered overflow-y-auto"  style="border-collapse: collapse;">
                  <thead class="bg-gray-50">
                  <tr style="background-color: rgb(249, 163, 146); color: black; width: 200px;">
                    <th class="p-3 text-left font-semibold " style="width: 100px;">#</th>
                    <th class="p-3 text-left font-semibold " style="width: 100px;">Name</th>
                    <th class="p-3 text-left font-semibold ">LastName</th>
                    <th class="p-3 text-left font-semibold ">Username</th>
                    <th class="p-3 text-left font-semibold ">Email</th>
                    <th v-if="selectedUserType === 'clientes'"  class="p-3 text-left font-semibold ">Dirección</th>
                    <th v-if="selectedUserType === 'especialistas'"  class="p-3 text-left font-semibold ">Especialidad</th>

                    <th class="p-3 text-left font-semibold "> Actions</th>
                  </tr>
                  </thead>
    
                  <tbody class="bg-white divide-y divide-gray-200">
                  <tr  v-for="dato in datos" :key="dato.id">
                    <td class="p-3 font-medium" style="color: #000;">{{ dato.id }}</td>
                    <td class="p-3 font-medium" style="color: #000;">{{ dato.usuario.first_name }}</td>
                    <td class="p-3 font-medium" style="color: #000;">{{ dato.usuario.last_name}}</td>
                    <td class="p-3 font-medium" style="color: #000;">{{ dato.usuario.username }}</td>
                    <td class="p-3 font-medium" style="color: #000;">{{ dato.usuario.email }}</td>
                    <td v-if="selectedUserType === 'clientes'" class="p-3 font-medium" style="color: #000;">{{ dato.direccion }}</td>
                    <td v-if="selectedUserType === 'especialistas'" class="p-3 font-medium" style="color: #000;">{{ dato.especialidad }}</td>
                    <td class="px-6 py-4 whitespace-nowrap space-x-2">
                      <Button class="btn text-rose-600 hover:text-rose-800" style="background-color:lightgoldenrodyellow !important" @click="startEdit(dato)">Edit</button>
                      <Button class="btn text-gray-600 hover:text-gray-800" style="background: var(--p-tag-danger-background) !important;color: var(--p-tag-danger-color) !important;"@click="deleteRow(dato)">Cancel</button>
                    </td>
                
                  </tr>
                  </tbody>
                </table>

    </div>
 
        
    

    
</template>

<script setup>

import { ref, onMounted } from 'vue';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import { clienteService } from '../services/clienteService.js'; // Importar el servicio
import { especialistaService } from '../services/especialistaService.js';
import { administradorService } from '../services/administradorService.js';

// Estado para los servicios y carga
const selectedUserType = ref('clientes');
const datos = ref([]); // Inicialmente vacío
const isLoading = ref(false);
const error = ref(null);

     // Cargar servicios desde el backend
async function cargarAdmin() {
    isLoading.value = true; 
    error.value = null;

    try {

    let response;
    if (selectedUserType.value === 'especialistas') {
      response = await especialistaService.getAll();
    } else if (selectedUserType.value === 'clientes') {
      response = await clienteService.getAll();
    } else if (selectedUserType.value === 'admins') {
      response = await administradorService.getAll();
    }
    
    datos.value = response.data.map(dato => ({
        ...dato
       }));
  
    } catch (err) {
      error.value = 'Error al cargar los admins: ' + err.message;
    } finally {
      isLoading.value = false;
    }
};


  // Llamar a cargarServicios al montar el componente
 
onMounted(cargarAdmin);

</script>