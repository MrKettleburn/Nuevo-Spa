<template>

    <div  class="overflow-x-auto overflow-y-auto flex justify-center items-center flex-col" style="table-layout: fixed; padding: 50px; height: 600px;" >
              <h2 class="text-2xl font-semibold text-gray-900">All users</h2>
              <div class="bg-white shadow rounded-lg overflow-hidden overflow-y-auto" style="height: 500px;">
                
                <table class="min-w-full divide-y divide-gray-200 table-bordered overflow-y-auto"  style="border-collapse: collapse; width: 1200px;">
                  <thead class="bg-gray-50">
                  <tr style="background-color: rgb(249, 163, 146); color: black; width: 200px;">
                    <th class="p-3 text-left font-semibold " style="width: 10px;">#</th>
                    <th class="p-3 text-left font-semibold " style="width: 150px;">Name</th>
                    <th class="p-3 text-left font-semibold ">LastName</th>
                    <th class="p-3 text-left font-semibold ">Username</th>
                    <th class="p-3 text-left font-semibold " style="width: 250px;" >Email</th>
                    <th class="p-3 text-left font-semibold " style="width: 50px;">User Type</th>
                    <th class="p-3 text-left font-semibold " style="width: 50px;"> Actions</th>
                  </tr>
                  </thead>
    
                  <tbody class="bg-white divide-y divide-gray-200">
                  <tr  v-for="actividad in actividades" :key="actividad.name">
                    <td class="p-3 font-medium" style="color: #000;">{{ actividad.id }}</td>
                    <td class="p-3 font-medium" style="color: #000;">{{ actividad.name }}</td>
                    <td class="p-3 font-medium" style="color: #000;">{{ actividad.lastname}}</td>
                    <td class="p-3 font-medium" style="color: #000;">{{ actividad.username }}</td>
                    <td class="p-3 font-medium" style="color: #000;">{{ actividad.email }}</td>
                    <td class="p-3 font-medium" style="color: #000;"><Tag :value="actividad.type" :severity="getSeverity(actividad.status)" /></td>
                    <td class="px-6 py-4 whitespace-nowrap space-x-2">
                      <Button class="btn text-rose-600 hover:text-rose-800" style="background-color:lightgoldenrodyellow !important" @click="startEdit(actividad)">Edit</button>
                      <Button class="btn text-gray-600 hover:text-gray-800" style="background: var(--p-tag-danger-background) !important;color: var(--p-tag-danger-color) !important;"@click="deleteRow(actividad)">Cancel</button>
                    </td>
                
                </tr>
                  </tbody>
                </table>
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
    
        <button class="px-4 py-2 rounded-lg transition duration-300 shadow-md" style="background-color: rgb(249, 163, 146); color: black; margin: 20px;" @click="openAddModal">
            Add User
        </button>
    </div>
    
    
    
    
    </template>
    
    <script setup>
    
    import { ref } from 'vue';
    import Tag from 'primevue/tag';
    import Button from 'primevue/button'
    
    const services = [
      { name: 'Group Activity', key: 'group' },
      { name: 'Massage', key: 'masage' },
      { name: 'Manicure', key: 'manicure' },
      { name: 'Pedicure', key: 'pedicure' },
      { name: 'Face', key: 'face' },
      { name: 'Sports Massage', key: 'sports' },
    ];
    
    const ubicacion = [
      { name: 'Admin', key: 'admin' },
      { name: 'Specialist', key: 'esp' },
      { name: 'Client', key: 'client' },
      
    ];

    const sexs = [
      { name: 'Female', key: 'f' },
      { name: 'Male', key: 'm' },
      
    ];
    
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
    
    
    
    const actividades = ref([
    
    {
        id: 1,
    name: 'Juan',
    status: 'specialist',
    lastname: 'Pérez',
    age: 30,
    sex: 'male',
    password: 'password123',
    username: 'juanperez',
    email:'anag1567@gmail.com',
    type: 'admin'
  },
  {id: 2,
    name: 'Ana',
    status: 'client',
    lastname: 'García',
    age: 25,
    sex: 'female',
    password: 'password456',
    username: 'anagarcia',
    email:'anag1567@gmail.com',
    type: 'client'
  },
  {id: 3,
    name: 'Luis',
    status: 'specialist',
    lastname: 'Martínez',
    age: 28,
    sex: 'male',
    password: 'password789',
    username: 'luismartinez',
    email:'anag1567@gmail.com',
    type: 'admin'
  },
  {id: 4,
    name: 'María',
    status: 'client',
    lastname: 'López',
    age: 32,
    sex: 'female',
    password: 'password101',
    username: 'marialopez',
    email:'anag1567@gmail.com',
    type: 'specialist'
  }
  
    
    ]);

    const isModalVisible = ref(false);
const editedId=ref(null);
const editedItem = ref({});
const isEditing = ref(false);

const openAddModal = () => {
  editedItem.value = { id: null,  name: '',
            image: '',
            serviceType: '',
            spaLocation: '',
             maxParticipants: '',
             date:'',
             time: '',
             status: '',
             descripcion:''}; // Inicializar nuevo ítem
             editedItem.value.status='pending';
  isModalVisible.value = true;
  isEditing.value = false;
};

const startEdit = (actividad) => {
  editedId.value=actividad.id;
  editedItem.value = { ...actividad }; // Clon del ítem
  isModalVisible.value = true;
  isEditing.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
  editedItem.value = null;
  isEditing.value = false;
};

const submitActivity = () => {
  if (isEditing.value) {
    const index = actividades.value.findIndex(actividad =>actividad.id === editedId.value);
    if (index !== -1) {
        actividades.value[index] = { ...editedItem.value }; // Actualizar el ítem
     
    }
  }else {
    editedItem.value.id = actividades.value.length ? Math.max(...actividades.value.map(i => i.id)) + 1 : 1; // Asignar un nuevo id único
    actividades.value.push({ ...editedItem.value }); // Agregar nuevo ítem
  }
  closeModal();


};
const deleteRow = (actividad) => {
    editedId.value=actividad.id;
    const index = actividades.value.findIndex(actividad =>actividad.id === editedId.value);
    if (index !== -1) {
        actividades.value.splice(index, 1); // eliminar el ítem
      closeModal();
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