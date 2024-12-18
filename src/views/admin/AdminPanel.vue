<template>
  <div class="flex h-screen bg-gray-50">
    <!-- Barra lateral izquierda -->
    <aside class="w-64 shadow-md">
      <div class="p-4">
        <h1 class="text-2xl font-bold">
          <span class="text-gray-900">SPA</span>
          <span class="text-rose-300">Center</span>
        </h1>
        <p class="text-sm text-gray-600 mt-1">Panel de Administración</p>
      </div>
      <nav class="mt-6">
        <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="currentTab = tab.id"
            :class="[
            'w-full text-left px-4 py-2 text-sm font-medium',
            currentTab === tab.id
              ? 'bg-rose-100 text-rose-700 border-l-4 border-rose-500'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
          ]"
        >
          {{ tab.name }}
        </button>
      </nav>
    </aside>

    <!-- Contenido principal -->
    <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
      <div class="container mx-auto px-6 py-8">
        <!-- Pestaña de Usuarios -->
        <div v-if="currentTab === 'users'" class="space-y-6">
          <h2 class="text-2xl font-semibold text-gray-900">Usuarios Registrados</h2>
          <div class="bg-white shadow rounded-lg overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="user in users" :key="user.id">
                <td class="px-6 py-4 whitespace-nowrap">{{ user.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ user.email }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ user.phone }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <button class="text-rose-600 hover:text-rose-800">Editar</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Pestaña de Reservas -->
        <div v-if="currentTab === 'reservations'" class="space-y-6">
          <h2 class="text-2xl font-semibold text-gray-900">Reservas Actuales</h2>
          <div class="bg-white shadow rounded-lg overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Servicio</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hora</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="reservation in reservations" :key="reservation.id">
                <td class="px-6 py-4 whitespace-nowrap">{{ reservation.client }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ reservation.service }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ reservation.date }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ reservation.time }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span :class="[
                      'px-2 py-1 text-xs rounded-full',
                      reservation.status === 'Confirmado' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    ]">
                      {{ reservation.status }}
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap space-x-2">
                  <button class="text-rose-600 hover:text-rose-800">Editar</button>
                  <button class="text-gray-600 hover:text-gray-800">Cancelar</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Pestaña de Servicios -->
        <div v-if="currentTab === 'services'" class="space-y-6">
          <div class="flex justify-between items-center">
            <h2 class="text-2xl font-semibold text-gray-900">Servicios Disponibles</h2>
            <button
                @click="showServiceModal = true"
                class="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600"
            >
              Añadir Nuevo Servicio
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="service in services" :key="service.id" class="bg-white shadow rounded-lg p-6 space-y-4">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="font-medium text-gray-900">{{ service.name }}</h3>
                  <p class="text-sm text-gray-500">Responsable: {{ service.responsible }}</p>
                  <p class="text-sm text-gray-500">Hora: {{ service.time }}</p>
                </div>
                <div class="flex space-x-2">
                  <button
                      @click="editService(service)"
                      class="text-rose-600 hover:text-rose-800"
                  >
                    Editar
                  </button>
                  <button
                      @click="deleteService(service.id)"
                      class="text-gray-600 hover:text-gray-800"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Modal de Servicio -->
    <div v-if="showServiceModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 class="text-lg font-medium mb-4">{{ editingService ? 'Editar Servicio' : 'Añadir Nuevo Servicio' }}</h3>
        <form @submit.prevent="saveService" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Nombre del Servicio</label>
            <input
                v-model="serviceForm.name"
                type="text"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Responsable</label>
            <input
                v-model="serviceForm.responsible"
                type="text"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Hora</label>
            <input
                v-model="serviceForm.time"
                type="time"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
            />
          </div>
          <div class="flex justify-end space-x-2">
            <button
                type="button"
                @click="showServiceModal = false"
                class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Cancelar
            </button>
            <button
                type="submit"
                class="px-4 py-2 text-sm font-medium text-white bg-rose-500 rounded-lg hover:bg-rose-600"
            >
              {{ editingService ? 'Guardar Cambios' : 'Añadir Servicio' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Pestañas
const tabs = [
  { id: 'users', name: 'Usuarios' },
  { id: 'reservations', name: 'Reservas' },
  { id: 'services', name: 'Servicios' }
]
const currentTab = ref('users')

// Datos de ejemplo
const users = ref([
  { id: 1, name: 'Juan Pérez', email: 'juan@ejemplo.com', phone: '+34123456789' },
  { id: 2, name: 'María García', email: 'maria@ejemplo.com', phone: '+34987654321' }
])

const reservations = ref([
  {
    id: 1,
    client: 'Juan Pérez',
    service: 'Masaje Relajante',
    date: '20/01/2024',
    time: '10:00',
    status: 'Confirmado'
  },
  {
    id: 2,
    client: 'María García',
    service: 'Terapia Facial',
    date: '21/01/2024',
    time: '14:00',
    status: 'Pendiente'
  }
])

const services = ref([
  { id: 1, name: 'Masaje Relajante', responsible: 'Juan Pérez', time: '10:00' },
  { id: 2, name: 'Terapia Facial', responsible: 'María García', time: '11:00' },
  { id: 3, name: 'Aromaterapia', responsible: 'Ana López', time: '14:00' }
])

// Formulario de Servicio
const showServiceModal = ref(false)
const editingService = ref(null)
const serviceForm = reactive({
  name: '',
  responsible: '',
  time: ''
})

// Operaciones CRUD de Servicios
function editService(service) {
  editingService.value = service
  serviceForm.name = service.name
  serviceForm.responsible = service.responsible
  serviceForm.time = service.time
  showServiceModal.value = true
}

function deleteService(id) {
  if (confirm('¿Estás seguro de que quieres eliminar este servicio?')) {
    services.value = services.value.filter(service => service.id !== id)
  }
}

function saveService() {
  if (editingService.value) {
    const index = services.value.findIndex(s => s.id === editingService.value.id)
    services.value[index] = {
      ...editingService.value,
      name: serviceForm.name,
      responsible: serviceForm.responsible,
      time: serviceForm.time
    }
  } else {
    services.value.push({
      id: services.value.length + 1,
      name: serviceForm.name,
      responsible: serviceForm.responsible,
      time: serviceForm.time
    })
  }

  showServiceModal.value = false
  editingService.value = null
  serviceForm.name = ''
  serviceForm.responsible = ''
  serviceForm.time = ''
}
</script>