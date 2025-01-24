import api from '../api'

export const servicioService = {
    getAll() {
        return api.get('/api/business/servicios/')
    },
 
    getById(id) {
        return api.get(`/api/business/servicios/${id}/`)
    },

    create(servicioData) {
        return api.post('/api/business/servicios/', servicioData)
    },

    update(id, servicioData) {
        return api.patch(`/api/business/servicios/${id}/`, servicioData)
    },

    delete(id) {
        return api.delete(`/api/business/servicios/${id}/`)
    },

    reservar(id) {
        return api.post(`/api/business/servicios/${id}/reservar/`)
    },

    getMisReservas() {
        return api.get('/api/business/servicios/mis-reservas/')
    },

    getServiciosReservadosEspecialista(){
        return api.get('/api/business/servicios/reservados-especialistas/')
    },
    
    getServiciosEspecialista(){
        return api.get('/api/business/servicios/mis-servicios/')
    }
}

// // Configuración base de Axios
// const api = axios.create({
//     baseURL: 'http://127.0.0.1:8000/api/business', // Cambia según tu configuración
//     timeout: 5000, // Opcional, tiempo máximo para las solicitudes
//   });
  
//   // Función para obtener todos los servicios
//   export const fetchServicios = async () => {
//     const response = await api.get('/servicios/');
//     return response.data; // Devuelve la lista de servicios
//   };