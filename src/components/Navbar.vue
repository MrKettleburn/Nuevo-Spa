<template>
  <div class="card">
      <a>
          <h1 style="color: #F9A392">
              <span style="color: #211E1C">SPA</span> Center
          </h1>
      </a>
      <Menubar :model="items" style="border: none;" />
      <div class="card-content">
          <router-link to="/login" v-if="!isLoggedIn" class="login-btn">Login</router-link>
          <button v-if="isLoggedIn" @click="handleLogout" class="logout-btn">Logout</button>
      </div>
  </div>
</template>

<script setup>
import Menubar from "primevue/menubar";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../services/useAuth"; // Importa el composable de autenticación
import { logout as logoutService } from "../services/authService"; // Importa el logout desde el archivo de servicios
import { getRoleFromToken } from "../services/authService";
import { onMounted } from "vue";

const { isLoggedIn, logout } = useAuth();
const router = useRouter();
const userRole = ref(""); // Variable para guardar el rol del usuario
const items = ref([]); 

function handleLogout() {
    logoutService(); // Llamar a logout de authService para limpiar localStorage
    logout(); // Actualizar el estado reactivo a false
}
function loadMenu() {
    const role = getRoleFromToken(); // Obtener el rol del token
    userRole.value = role;

    // Menú común
    const commonItems = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => {
                router.push('/');
            }
        },
        {
            label: 'About Us',
            icon: 'pi pi-search',
            command: () => {
                router.push('/about');
            },
        },
        {
            label: 'Services',
            icon: 'pi pi-search',
            command: () => {
                router.push('/services');
            },
        }
    ];

    // Dependiendo del rol, agregamos más opciones al menú
    let roleItems = [];

    if (role === 'administrador') {
        roleItems = [
            {
                label: 'Admin',
                icon: 'pi pi-id-card',
                items: [
                    {
                        label: 'Weekly Activity Schedule',
                        icon: 'pi pi-calendar-clock',
                        command: () => {
                            router.push('/horario');
                        },
                    },
                    {
                        label: 'All Activities',
                        icon: 'pi pi-clipboard',
                        command: () => {
                            router.push('/allActivities');
                        },
                    },
                ]
            }
        ];
    } else if (role === 'especialista') {
        roleItems = [
            {
                label: 'Specialist',
                icon: 'pi pi-id-card',
                items: [
                    {
                        label: 'My Services',
                        icon: 'pi pi-calendar-clock',
                        command: () => {
                            router.push('/horario');
                        },
                    },
                    {
                        label: 'Scheduled Services',
                        icon: 'pi pi-clipboard',
                        command: () => {
                            router.push('/allActivities');
                        },
                    },
                ]
            }
        ];
    } else if (role === 'cliente') {
        roleItems = [
            {
                label: 'Client',
                icon: 'pi pi-id-card',
                command: () => {
                    router.push('/horarioCliente');
                },
                items: [
                    {
                        label: 'Weekly Reserve Schedule',
                        icon: 'pi pi-calendar-clock',
                        command: () => {
                            router.push('/horarioCliente');
                        },
                    },
                    {
                        label: 'My Reserves',
                        icon: 'pi pi-clipboard',
                        command: () => {
                            router.push('/myReserves');
                        },
                    },
                ]
            }
        ];
    }

    // Combina el menú común con las opciones específicas del rol
    items.value = [...commonItems, ...roleItems];
}

// Cargar el menú cuando el componente se monta
onMounted(() => {
    loadMenu();
});
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

.login-btn,
.logout-btn {
    background-color: #f9a392;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    padding: 10px 20px;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 5px;
    cursor: pointer;
}

.logout-btn {
    background-color: #211e1c;
    color: #fff;
}
</style>



