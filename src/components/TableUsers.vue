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
                      <Button class="btn text-rose-600 hover:text-rose-800" style="background-color:lightgoldenrodyellow !important" @click="openEditModal(dato)">Edit</button>
                      <Button class="btn text-gray-600 hover:text-gray-800" style="background: var(--p-tag-danger-background) !important;color: var(--p-tag-danger-color) !important;"@click="deleteUser(dato.id)">Delete</button>
                    </td>
                
                  </tr>
                  </tbody>
                </table>

      <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Editar Usuario</h2>
        <form @submit.prevent="updateUser">
          <div>
            <label>Nombre:</label>
            <input v-model="editUserForm.usuario.first_name" type="text" required>
          </div>
          <div>
            <label>Nombre:</label>
            <input v-model="editUserForm.usuario.last_name" type="text" required>
          </div>
          <div>
            <label>Email:</label>
            <input v-model="editUserForm.usuario.email" type="email" required>
          </div>
          <div v-if="selectedUserType === 'clientes'">
            <label>Dirección:</label>
            <input v-model="editUserForm.direccion" type="text" required>
          </div>
          <div v-if="selectedUserType === 'especialistas'">
            <label>Especialidad:</label>
            <input v-model="editUserForm.especialidad" type="text" required>
          </div>
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>


    <!-- Modal para agregar o editar datos -->
    <div v-if="isModalVisible" class="modal shadow-lg " style="align-items: center !important; align-content: center !important; justify-content: center;">
          <div class="modal-content" style="flex:auto ;  flex-direction: row; overflow-y:auto; justify-content: center;align-items: center !important; align-content: center !important; max-width: 470px;">
            <span style="align-items: center !important; justify-content: center;align-content: center !important;" class="close" @click="closeModal">&times;</span>
            <h2 class="text-2xl font-bold" style=" text-align:center; color: rgb(249, 163, 146);">{{ isEditing  ? 'Edit' : 'Add' }} User</h2>
            <form @submit.prevent="submitActivity" style="align-items: normal;  display:flex; flex-direction: column;">
                
                <div style="padding: 5px;">
                  <label class="block text-sm font-medium text-gray-700">Name</label>
                  <input
                      v-model="editedItem.name"
                      type="text"
                      required
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" style="border: solid 1px; border-color: indianred !important;"
                  />
                  
                </div>
    
                <div style="padding: 5px;">
                  <label  class="block text-sm font-medium text-gray-700">LastName</label>
                  <input
                      v-model="editedItem.lastname"
                      type="text"
                      required
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" style="border: solid 1px; border-color: indianred !important;"
                  />
                </div>
                <div style="padding: 5px;">
                  <label  class="block text-sm font-medium text-gray-700">Username</label>
                  <textarea
                      v-model="editedItem.username"
                      required style="border: solid 1px; border-color: indianred !important;"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  ></textarea>
                </div>
                <div style="padding: 5px;">
                  <label  class="block text-sm font-medium text-gray-700">Age</label>
                  <input
                      v-model="editedItem.age" type="number"
                      required style="border: solid 1px; border-color: indianred !important;"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div style="padding: 5px;">
                  <label  class="block text-sm font-medium text-gray-700">Email</label>
                  <textarea
                      v-model="editedItem.email"
                      required style="border: solid 1px; border-color: indianred !important;"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  ></textarea>
                </div>
                <div style="padding: 5px;">
                  <label class="block text-sm font-medium text-gray-700">Sex</label>
                  <select v-model="editedItem.sex"
                      type="text"
                      required style="border: solid 1px; border-color: indianred !important;"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" >
                    <option v-for="sex in sexs" :key="sex.key" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">{{sex.name}}</option>
                  </select>
                </div>
                <div style="padding: 5px;">
                  <label class="block text-sm font-medium text-gray-700">User Type</label>
                  <select v-model="editedItem.type"
                      type="text"
                      required style="border: solid 1px; border-color: indianred !important;"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" >
                    <option v-for="ubicacio in ubicacion" :key="ubicacio.key" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">{{ubicacio.name}}</option>
                  </select>
                </div>
               
                <div style="padding: 5px;">
                  <label class="block text-sm font-medium text-gray-700">Password</label>
                  <input style="border: solid 1px; border-color: indianred !important;"
                      v-model="editedItem.password"
                      type="password"
                      required
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>

            
              <button type="submit" class="px-4 py-2 rounded-lg transition duration-300 shadow-md" style="background-color: rgb(249, 163, 146); color: black; margin: 20px;" >{{ isEditing  ? 'Guardar' : 'Agregar' }}</button>
            </form>
          </div>
        </div>


    </div>
 
        
    

    
</template>

<script setup>

import { ref, onMounted, reactive} from 'vue';
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

//Eliminar usuario
const deleteUser = async (userId) => {
  
  try {

    if (selectedUserType.value === 'especialistas') {
      await especialistaService.delete(userId);
    } else if (selectedUserType.value === 'clientes') {
      await clienteService.delete(userId);
    } else if (selectedUserType.value === 'admins') {
      await administradorService.delete(userId);
    }
    cargarAdmin();
  } catch (error) {
    console.error(`Error al eliminar el usuario con ID: ${userId}`, error);
  }
};


//Editar usuario
const showModal = ref(false);
const editUserForm = reactive({ 'id': null, 'usuario':{first_name: '', last_name:'', email: ''},  'direccion': '', 'especialidad': '' });

const openEditModal = (user) => {
  Object.assign(editUserForm, user);
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const updateUser = async () => {
  try {
    if (selectedUserType.value === 'especialistas') {
      await especialistaService.update(editUserForm.id, editUserForm);
    } else if (selectedUserType.value === 'clientes') {
      await clienteService.update(editUserForm.id, editUserForm);
    } else if (selectedUserType.value === 'admins') {
      await administradorService.update(editUserForm.id, editUserForm);
    }
    cargarAdmin();
    closeModal();
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
  }
};





</script>