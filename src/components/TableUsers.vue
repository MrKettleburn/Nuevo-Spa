<template>

    
    <div class="container mx-auto p-4 min-h-screen" style="width: 1200px;">

      <div class="justify-end">
        <select v-model="selectedUserType" @change="cargarAdmin" class="  bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:bg-white focus:border-pink-500">
           <option value="especialistas">Specialists</option>
           <option value="clientes">Clients</option>
           <option value="admins">Admins</option>
        </select>

        <button class="pi pi-plus px-4 py-2 rounded-lg transition duration-300 shadow-md" style="background-color: rgb(249, 163, 146); color: black; margin: 20px;" @click="openEditModal()">
            
        </button>

        
        <button 
          class="pi pi-file-pdf px-4 py-2 rounded-lg transition duration-300 shadow-md text-sm font-medium text-gray-700" 
          style="background-color: rgb(249, 163, 146); color: black; margin: 20px;" 
          @click="exportToPDF">
          Export to PDF
        </button>


      </div>


        <table class="min-w-full divide-y divide-gray-200 table-bordered overflow-y-auto overflow-x-auto"  style="border-collapse: collapse;">
                  <thead class="bg-gray-50">
                  <tr style="background-color: rgb(249, 163, 146); color: black; width: 200px;">
                    <th class="p-3 text-left font-semibold " style="width: 100px;">#</th>
                    <th class="p-3 text-left font-semibold " style="width: 100px;">Name</th>
                    <th class="p-3 text-left font-semibold ">LastName</th>
                    <th class="p-3 text-left font-semibold ">Username</th>
                    <th class="p-3 text-left font-semibold ">Email</th>
                    <th v-if="selectedUserType === 'clientes'"  class="p-3 text-left font-semibold ">Address</th>
                    <th v-if="selectedUserType === 'especialistas'"  class="p-3 text-left font-semibold ">Speciality</th>

                    <th class="p-3 text-left font-semibold"> Actions</th>
                  </tr>
                  </thead>
    
                  <tbody class="bg-white divide-y divide-gray-200">
                  <tr  v-for="dato in datos" :key="dato.id">
                    <td class="p-3 font-medium" style="color: #000;">{{ dato.usuario.id }}</td>
                    <td class="p-3 font-medium" style="color: #000;">{{ dato.usuario.first_name }}</td>
                    <td class="p-3 font-medium" style="color: #000;">{{ dato.usuario.last_name}}</td>
                    <td class="p-3 font-medium" style="color: #000;">{{ dato.usuario.username }}</td>
                    <td class="p-3 font-medium" style="color: #000;">{{ dato.usuario.email }}</td>
                    <td v-if="selectedUserType === 'clientes'" class="p-3 font-medium" style="color: #000;">{{ dato.direccion }}</td>
                    <td v-if="selectedUserType === 'especialistas'" class="p-3 font-medium" style="color: #000;">{{ dato.especialidad }}</td>
                    <td class="px-6 py-4 whitespace-nowrap space-x-2">
                      <button class="pi pi-pencil text-gray-600 hover:text-gray-800" style="margin:20px" @click="openEditModal(dato)"></button>
                      <button class="pi pi-trash  text-gray-600 hover:text-gray-800" style="margin:20px" @click="deleteUser(dato.id)"></button>
                    </td>
                
                  </tr>
                  </tbody>
                </table>


                <div v-if="showModal" class="modal">


                    

<!---Modal de editar usuario-->

      <div v-if="showModal" class="modal shadow-lg " style="align-items: center !important; align-content: center !important; justify-content: center; ">
      <div class="modal-content" style="flex:auto ;  flex-direction: row; overflow-y:auto; justify-content: center;align-items: center !important; align-content: center !important; max-width: 400px; ">
        <span style="align-items: center !important; justify-content: center;align-content: center !important;" class="close" @click="closeModal">&times;</span>    
        <h2 class="text-2xl font-bold" style=" text-align:center; color: rgb(249, 163, 146);">{{ isEditMode ? 'Edit User' : 'Add User' }}</h2> 
        <form style="align-items: normal;  display:flex; flex-direction: column;" @submit.prevent="updateUser">
          <div v-if="isEditMode">
            <div class="divModal" >
              <label class="block text-sm font-medium text-gray-700">First Name:</label>
              <input v-model="editUserForm.usuario.first_name" type="text" required tyle="border: solid 1px; border-color: indianred !important;"
              class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]">
            </div>
            <div class="divModal" >
              <label class="block text-sm font-medium text-gray-700">Last Name:</label>
              <input v-model="editUserForm.usuario.last_name" type="text" required tyle="border: solid 1px; border-color: indianred !important;"
              class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]">
            </div>
          
            <div class="divModal" >
              <label class="block text-sm font-medium text-gray-700">Email:</label>
              <input v-model="editUserForm.usuario.email" type="email" required tyle="border: solid 1px; border-color: indianred !important;"
              class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]">
            </div>         
            <div class="divModal" v-if="selectedUserType === 'clientes'">
              <label class="block text-sm font-medium text-gray-700">Address:</label>
              <input v-model="editUserForm.direccion" type="text" required tyle="border: solid 1px; border-color: indianred !important;"
              class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]">
            </div>
            <div class="divModal"  v-if="selectedUserType === 'especialistas'">
              <label class="block text-sm font-medium text-gray-700">Speciality:</label>
              <input v-model="editUserForm.especialidad" type="text" required tyle="border: solid 1px; border-color: indianred !important;"
              class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]">
            </div>
          </div>
          <div v-else>
            <div class="divModal" >
              <label class="block text-sm font-medium text-gray-700">First Name:</label>
              <input v-model="addUserForm.usuario.first_name" type="text" required tyle="border: solid 1px; border-color: indianred !important;"
              class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]">
            </div>
            <div class="divModal" >
              <label class="block text-sm font-medium text-gray-700">Last Name:</label>
              <input v-model="addUserForm.usuario.last_name" type="text" required tyle="border: solid 1px; border-color: indianred !important;"
              class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]">
            </div>
            <div class="divModal" >
              <label class="block text-sm font-medium text-gray-700">Username:</label>
              <input v-model="addUserForm.usuario.username" type="text" required tyle="border: solid 1px; border-color: indianred !important;"
              class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]">
            </div>
            <div class="divModal" >
              <label class="block text-sm font-medium text-gray-700">Password:</label>
              <input v-model="addUserForm.usuario.password" type="password" required tyle="border: solid 1px; border-color: indianred !important;"
              class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]">
            </div>
          
            <div class="divModal" >
              <label class="block text-sm font-medium text-gray-700">Email:</label>
              <input v-model="addUserForm.usuario.email" type="email" required tyle="border: solid 1px; border-color: indianred !important;"
              class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]">
            </div>         
            <div class="divModal" v-if="selectedUserType === 'clientes'">
              <label class="block text-sm font-medium text-gray-700">Address:</label>
              <input v-model="addUserForm.direccion" type="text" required tyle="border: solid 1px; border-color: indianred !important;"
              class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]">
            </div>
            <div class="divModal"  v-if="selectedUserType === 'especialistas'">
              <label class="block text-sm font-medium text-gray-700">Speciality:</label>
              <input v-model="addUserForm.especialidad" type="text" required tyle="border: solid 1px; border-color: indianred !important;"
              class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]">
            </div>
          </div>  
          <button type="submit" class="px-4 py-2 rounded-lg transition duration-300 shadow-md" style="background-color: rgb(249, 163, 146); color: black; margin: 20px;">{{ isEditMode ? 'Save Changes' : 'Add User' }}</button>
        </form>
      </div>
    </div>
<!---Fin de Modal de editar usuario-->


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
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// Función para exportar la tabla a PDF
const exportToPDF = () => {
  const doc = new jsPDF();

  // Título del documento
  doc.text('Users', 14, 10);

  // Crear un arreglo para almacenar los datos
  const tableData = datos.value.map((dato, index) => {
    const commonFields = [
      dato.usuario.first_name,
      dato.usuario.last_name,
      dato.usuario.username,
      dato.usuario.email,
    ];

    if (selectedUserType.value === 'clientes') {
      return [...commonFields, dato.direccion || 'N/A'];
    } else if (selectedUserType.value === 'especialistas') {
      return [...commonFields, dato.especialidad || 'N/A'];
    } else {
      return commonFields; // Solo campos comunes
    }
  });

  // Definir las columnas de la tabla
  const tableColumns = [
    'Name',
    'LastName',
    'Username',
    'Email',
  ];

  if (selectedUserType.value === 'clientes') {
    tableColumns.push('Address');
  } else if (selectedUserType.value === 'especialistas') {
    tableColumns.push('Speciality');
  }

  // Dibujar la tabla en el PDF
  doc.autoTable({
    startY: 30, // Margen superior
    head: [tableColumns],
    body: tableData,
    theme: 'striped', // Estilo de la tabla (opcional)
    styles: { fontSize: 10, cellPadding: 4 },
    headStyles: { fillColor: [249, 163, 146], textColor: 0 },
    margin: { top: 10 },
  });

  // Guardar el documento
  doc.save('users.pdf');
};



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


//Editar o agregar  usuario

const isEditMode = ref(false);
const showModal = ref(false);
const editUserForm = reactive({
  "id":null,
  "usuario": {
    "first_name": "",
    "last_name": "",
    "email": "",
    
    
  },
  "direccion": "",
  "especialidad":" ",
});

const addUserForm = reactive({
  "id":null,
  "usuario": {
    "first_name": "",
    "last_name": "",
    "email": "",
    "password":'',
    "username":" ",
    
  },
  "direccion": "",
  "especialidad":" ",
});


const openEditModal = (user=null) => {
  if(user){
    editUserForm.id=user.id;
    editUserForm.usuario.first_name=user.usuario.first_name;
    editUserForm.usuario.last_name=user.usuario.last_name;
    editUserForm.usuario.email=user.usuario.email;
    editUserForm.direccion=user.direccion;
    editUserForm.especialidad=user.especialidad;
    isEditMode.value = true;
  }else{
    addUserForm.id='';
    addUserForm.usuario.first_name='';
    addUserForm.usuario.last_name='';
    addUserForm.usuario.email='';
    addUserForm.direccion='';
    addUserForm.especialidad='';
    addUserForm.usuario.password='';
    addUserForm.usuario.username='';
    isEditMode.value = false;
  }
  
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const updateUser = async () => {

  if (isEditMode.value) {
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
  } else {
    try {
    if (selectedUserType.value === 'especialistas') {
      await especialistaService.create(addUserForm);
    } else if (selectedUserType.value === 'clientes') {
      await clienteService.create(addUserForm);
    } else if (selectedUserType.value === 'admins') {
      await administradorService.create(addUserForm);
    }
    cargarAdmin();
    closeModal();
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
  }
  }


  
};

//Agregar usuario







</script>

<style scoped>
.divModal{
  padding: 5px;
  margin: 10px;
};

</style>