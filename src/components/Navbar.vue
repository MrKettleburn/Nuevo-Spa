<template>
    <div class="card">
        <a><h1 style="color: #F9A392" ><span style="color: #211E1C">SPA</span> Center</h1></a>
        <Menubar :model="items" style="border: none;"/>
        <div class="card-content">
          <div class="dark-mode">
           <i class="pi" :class="isDarkMode ? 'pi-moon' : 'pi-sun'" :style="iconStyle" ></i>
           <ToggleSwitch v-model="isDarkMode" @update:model-value="toggleDarkMode" />
         </div>
         <Button class="login-btn">Login</Button>
        </div>
    </div>
</template>


<script setup>
import { PrimeIcons } from '@primevue/core/api';
 import Menubar from 'primevue/menubar';
 import { ref } from "vue";
 import Button from "primevue/button";
 import { useRouter } from 'vue-router';
 import ToggleSwitch from "primevue/toggleswitch";


const isDarkMode = ref(false);
const router = useRouter(); 


function toggleDarkMode() {
  document.documentElement.classList.toggle("my-app-dark", isDarkMode.value);
}

const iconStyle = {
  fontSize: "1.5rem", 
  color: isDarkMode.value ? "#FFC107" : "#FFA726", 
};

 const items = ref([
    {
        label: 'Home',
        icon: PrimeIcons.HOME,
        command: () => {
            router.push('/'); 
        }
    },
    {
        label: 'About',
        icon: PrimeIcons.INFO_CIRCLE,
        command: () => {
            router.push('/about'); 
        }
    },
    {
        label: 'Services',
        icon: PrimeIcons.LIST,
        command: () => {
            router.push('/services');  
        }
    },
    {
        label: 'Gestion',
        icon: PrimeIcons.BRIEFCASE,
        items: [
            {
                label: 'Reportes',
                icon: PrimeIcons.FILE,
                command: () => {
                  router.push('/gestion/reportes');  
                },
            },
            {
                label: 'Entrenadores',
                icon: PrimeIcons.ID_CARD,
                command: () => {
                  router.push('/gestion/entrenadores');  
                },
            },
            {
                label: 'Servicios',
                icon: PrimeIcons.LIST,
                command: () => {
                  router.push('/gestion/servicios');  
                },
            },
            {
                label: 'Usuarios',
                icon: PrimeIcons.USERS,
                command: () => {
                  router.push('/gestion/usuarios');  
                },
            }
        ]
    },
]);


</script>



<style scoped>

.dark-mode{
  display: flex;
  justify-content: center;
  padding-top: 25px;
  margin-right: 40px;
}
.card{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding-inline: 40px;
  width: 100%; 
  z-index: 1000; 
  background-color: white; 
  box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.1);
}
 .card-content{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
 }

.pi {
  transition: color 0.3s ease, transform 0.3s ease;
  padding-right: 10px;
}

/* Animación suave al cambiar */
.pi-moon {
  transform: rotate(20deg);
}

.pi-sun {
  transform: rotate(-20deg);
}

.login-btn{
  background-color: #F9A392;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  padding: 10px 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  cursor: pointer;
}
</style>



