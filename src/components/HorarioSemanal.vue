<template>
  <Section title="My Services"/>
  <div class="container mx-auto p-4 min-h-screen">

    <div class="mt-6 flex justify-end space-x-3" style="margin-bottom: 15px; margin-top: 0;">
      <button 
          @click="showAddModal"
          class="pi pi-plus px-4 py-2 rounded-lg transition duration-300 shadow-md"
          style="background-color: rgb(249, 163, 146); color: black;"
      >
        
      </button>
      
      
      <button
          @click="showDetails"
          :disabled="!selectedActivity"
          class="pi pi-bars px-4 py-2 rounded-lg transition duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          style="background-color:salmon; color: black"
      >
        
      </button>
      <button
          @click="showChangeModal"
          :disabled="!selectedActivity"
          class="pi pi-file-edit px-4 py-2 rounded-lg transition duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          style="background-color:rgb(240, 99, 99); color: black;"
      >
        
      </button>
      <button
          @click="cancelActivity"
          :disabled="!selectedActivity"
          class="pi pi-trash px-4 py-2 rounded-lg transition duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          style="background-color:indianred; color:black;"
      >
        
      </button>
    </div>
    <div  class="overflow-x-auto overflow-y-auto flex justify-center items-center flex-col" style="table-layout: fixed; padding: 50px; height: 600px;" >
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
          </div>
    </div>
    <!-- <div class="overflow-hidden shadow-xl rounded-lg" style="background-color: #fff; padding-top: 0;">
      <div class="overflow-x-auto overflow-y-auto" style="max-height: 600px;">
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
    </div> -->

    

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
      <div v-if="isAddModalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
        <div class="bg-white rounded-lg shadow-2xl p-6 w-full max-w-4xl mx-auto">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold text-[rgb(249,163,146)]">Add New Activity</h2>
            <button @click="closeAddModal" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
          </div>
          <form @submit.prevent="addActivity" class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="newActivityDate" class="block text-sm font-medium text-gray-700">Fecha</label>
              <input
                  v-model="newActivity.date"
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
                  v-model="newActivity.time"
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
                  v-model="newActivity.name"
                  id="newActivityName"
                  type="text"
                  required
                  class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
              />
            </div>
            <div>
              <label for="newActivityDescription" class="block text-sm font-medium text-gray-700">Descripción</label>
              <textarea
                  v-model="newActivity.description"
                  id="newActivityDescription"
                  required
                  class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
              ></textarea>
            </div>
            <div>
              <label for="newActivityType" class="block text-sm font-medium text-gray-700">Tipo</label>
              <select
                  v-model="newActivity.type"
                  id="newActivityType"
                  required
                  class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
              >
                <option value="">Selecciona un tipo</option>
                <option v-for="type in activityTypes" :key="type" :value="type">{{ type }}</option>
              </select>
            </div>
            <div>
              <label for="newActivityPrice" class="block text-sm font-medium text-gray-700">Precio</label>
              <input
                  v-model="newActivity.price"
                  id="newActivityPrice"
                  type="number"
                  step="0.01"
                  required
                  class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
              />
            </div>
            <div>
              <label for="newActivityCategory" class="block text-sm font-medium text-gray-700">Categoría</label>
              <select
                  v-model="newActivity.category"
                  id="newActivityCategory"
                  required
                  class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
              >
                <option value="">Selecciona una categoría</option>
                <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
              </select>
            </div>
            <div>
              <label for="newActivityImage" class="block text-sm font-medium text-gray-700">Imagen</label>
              <div class="mt-1 flex items-center">
                <input
                    @change="handleImageUpload"
                    id="newActivityImage"
                    type="file"
                    accept="image/*"
                    class="hidden"
                    ref="fileInput"
                />
                <button
                    type="button"
                    @click="$refs.fileInput.click()"
                    class="px-4 py-2 bg-[rgb(249,163,146)] text-white rounded-md hover:bg-[rgb(249,163,146)/90] focus:outline-none focus:ring-2 focus:ring-[#F9A392] focus:ring-offset-2 transition-colors"
                >
                  Browse
                </button>
                <span v-if="imageName" class="ml-3 text-sm text-gray-700">{{ imageName }}</span>
                <span v-else class="ml-3 text-sm text-gray-500">No file chosen</span>
              </div>
            </div>
            <button
                type="submit"
                class="col-span-1 md:col-span-2 w-full px-4 py-2 bg-[rgb(249,163,146)] text-white rounded-lg transition duration-300 shadow-md hover:bg-[rgb(249,163,146)/90]"
            >
              Add Activity
            </button>
          </form>
        </div>
      </div>
    </transition><transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
  >
    <div v-if="isAddModalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div class="bg-white rounded-lg shadow-2xl p-6 w-full max-w-4xl mx-auto">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold text-[rgb(249,163,146)]">Add New Activity</h2>
          <button @click="closeAddModal" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>
        <form @submit.prevent="addActivity" class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="newActivityDate" class="block text-sm font-medium text-gray-700">Fecha</label>
            <input
                v-model="newActivity.date"
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
                v-model="newActivity.time"
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
                v-model="newActivity.name"
                id="newActivityName"
                type="text"
                required
                class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
            />
          </div>
          <div>
            <label for="newActivityDescription" class="block text-sm font-medium text-gray-700">Descripción</label>
            <textarea
                v-model="newActivity.description"
                id="newActivityDescription"
                required
                class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
            ></textarea>
          </div>
          <div>
            <label for="newActivityType" class="block text-sm font-medium text-gray-700">Tipo</label>
            <select
                v-model="newActivity.type"
                id="newActivityType"
                required
                class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
            >
              <option value="">Selecciona un tipo</option>
              <option v-for="type in activityTypes" :key="type" :value="type">{{ type }}</option>
            </select>
          </div>
          <div>
            <label for="newActivityPrice" class="block text-sm font-medium text-gray-700">Precio</label>
            <input
                v-model="newActivity.price"
                id="newActivityPrice"
                type="number"
                step="0.01"
                required
                class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
            />
          </div>
          <div>
            <label for="newActivityCategory" class="block text-sm font-medium text-gray-700">Categoría</label>
            <select
                v-model="newActivity.category"
                id="newActivityCategory"
                required
                class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
            >
              <option value="">Selecciona una categoría</option>
              <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
            </select>
          </div>
          <div>
            <label for="newActivityImage" class="block text-sm font-medium text-gray-700">Imagen</label>
            <div class="mt-1 flex items-center">
              <input
                  @change="handleImageUpload"
                  id="newActivityImage"
                  type="file"
                  accept="image/*"
                  class="hidden"
                  ref="fileInput"
              />
              <button
                  type="button"
                  @click="$refs.fileInput.click()"
                  class="px-4 py-2 bg-[rgb(249,163,146)] text-white rounded-md hover:bg-[rgb(249,163,146)/90] focus:outline-none focus:ring-2 focus:ring-[#F9A392] focus:ring-offset-2 transition-colors"
              >
                Browse
              </button>
              <span v-if="imageName" class="ml-3 text-sm text-gray-700">{{ imageName }}</span>
              <span v-else class="ml-3 text-sm text-gray-500">No file chosen</span>
            </div>
          </div>
          <button
              type="submit"
              class="col-span-1 md:col-span-2 w-full px-4 py-2 bg-[rgb(249,163,146)] text-white rounded-lg transition duration-300 shadow-md hover:bg-[rgb(249,163,146)/90]"
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
                  class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
              />
            </div>
            <div>
              <label for="changeActivityType" class="block text-sm font-medium text-gray-700">Tipo de Servicio</label>
              <select 
              v-model="selectedActivity.serviceType"
                  id="changeActivityType"
                  type="text"
                  required
                  class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]">
                <option v-for="service in services" :key="service.key" class="block text-sm font-medium text-gray-700 mt-1 block w-full rounded-md border-gray-300 shadow-sm">{{service.name}}</option>
              </select>
            </div>
            <div>
              <label for="changeActivityDescription" class="block text-sm font-medium text-gray-700">Descripción</label>
              <textarea
                  v-model="selectedActivity.descripcion"
                  id="changeActivityDescription"
                  required
                  class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
              ></textarea>
            </div>
            <div>
              <label for="changeActivityLocation" class="block text-sm font-medium text-gray-700">Ubicación en el Spa</label>
              <select v v-model="selectedActivity.spaLocation"
                  id="changeActivityLocation"
                  type="text"
                  required
                  class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]">
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
                  class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
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
import { ref, reactive, onMounted } from 'vue';
import Section from "../primeVue-components/Section.vue";
import { servicioService } from '../services/servicioService';

const days = [
  { name: 'Monday', key: 'lunes' },
  { name: 'Tuesday', key: 'martes' },
  { name: 'Wednesday', key: 'miercoles' },
  { name: 'Thursday', key: 'jueves' },
  { name: 'Friday', key: 'viernes' },
  { name: 'Saturday', key: 'sabado' },
];

const schedules = ref([]);

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

const imageName = ref('')

const activityTypes = ['Tipo 1', 'Tipo 2', 'Tipo 3'] // Replace with your actual types
const categories = ['Categoría 1', 'Categoría 2', 'Categoría 3'] // Replace with your

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
const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    newActivity.image = file.name
    imageName.value = file.name
  }
}

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

onMounted(cargarServicios);

</script>

<style scoped>

</style>
<!-- 
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
}, -->