<script setup>
import { defineProps } from 'vue';
import Button from "primevue/button";
import { isAuthenticated } from '../services/authService';// Importar la función isAuthenticated
import { useRouter } from 'vue-router'; // Usar el router para navegar
import { servicioService } from '../services/servicioService';

const router = useRouter();

const handleReserveClick = async () => {
    if (isAuthenticated()) {
      try {
            // Enviar solo el ID del servicio al backend
            console.log(props.id)
            const response = await servicioService.reservar(props.id); 
            alert(response.detail);  
        } catch (error) {
             // Verificar si el error tiene una respuesta desde el backend
             if (error.response && error.response.data && error.response.data.detail) {
                alert(error.response.data.detail); // Mostrar el mensaje del backend
            } else {
                alert("Hubo un error al realizar la reserva."); // Mensaje genérico en caso de otro tipo de error
            }
        }
    } else {
        // Redirigir al login
        router.push({ name: 'login' });
    }
};

const props = defineProps({
  id: {
    type: Number
  },
  tipo: {
    type: String
  },
  name: {
    type: String
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: String
  },
  horario: {
    type: String
  },
  categoria: {
    type: String
  },
  fecha: {
    type: String
  }
});

</script>

<template>
    <div class="flip-card">
        <div class="flip-card-inner">

          <template v-if="tipo==='servicio'">
            <div class="flip-card-front">
                <img :src="image" :alt="name" class="flip-card-photo">
                <p class="title">{{ name }}</p>
            </div>
            <div class="flip-card-back">
                <p class="title">{{name}}</p>
                <p style="margin-top: 20px; margin-bottom: 20px;">{{ description }}</p>
                <p ><b>Categoria: </b>{{ categoria }}</p>
                <p ><b>Precio: </b>{{ price }} USD</p>
                <p ><b>Fecha:</b> {{ fecha }}</p>
                <p ><b>Horario:</b> {{ horario }}</p>
                <Button label="Reservar" severity="secondary" raised class="reserve-button" @click="handleReserveClick"></Button>
            </div>
          </template>

          <template v-if="tipo==='especialista'">
            <div class="flip-card-front">
                <img :src="image" :alt="name" class="flip-card-photo">
                <p class="title">{{ name }}</p>
            </div>
            <div class="flip-card-back">
                <p class="title">{{name}}</p>
                <p style="margin-top: 20px; margin-bottom: 20px;">{{ description }}</p>
            </div>
          </template>

        </div>
    </div>
</template>

<style scoped>

.atributo-bold{
  font-weight: 700;
}

.flip-card {
  background-color: transparent;
  width: 280px;
  height: 380px;
  perspective: 1000px;
  font-family: sans-serif;
}

.title {
  font-size: 1.5em;
  bottom: 0px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  border: 10px;
  margin-top: 15px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid rgb(255, 241, 240); /*coral*/
  border-radius: 1rem;
}

.flip-card-front {
  background: linear-gradient(120deg, bisque 60%, rgb(255, 231, 222) 88%,
     rgb(255, 211, 195) 40%, rgba(255, 127, 80, 0.603) 48%);
  color: coral;
}

.flip-card-back {
  background: linear-gradient(120deg, rgb(255, 174, 145) 30%,  #f6c9b9 88%,
     bisque 40%, rgb(255, 185, 160) 78%);
  color: rgb(0, 0, 0);
  transform: rotateY(180deg);
}

.flip-card-photo{
  top: 0px;
  margin: 20px;
  margin-bottom: 0px;
  margin-top: 0px;
  width: 85%;
  height: 280px;
  border: 1px solid  #f6c9b9;
  border-radius: 1rem;
}

.reserve-button { 
  width: auto; 
  padding: 0.5rem 1rem; 
  margin: 1rem auto 0; /* Alineación central */
}

</style>