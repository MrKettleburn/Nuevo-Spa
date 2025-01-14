import axios from 'axios';

// Configuración base de Axios
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/business', // Cambia según tu configuración
  timeout: 5000, // Opcional, tiempo máximo para las solicitudes
});

// Función para obtener todos los servicios
export const fetchServicios = async () => {
  const response = await api.get('/servicios/');
  return response.data; // Devuelve la lista de servicios
};