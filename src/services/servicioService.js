import api from '../api'

export const servicioService = {
    getAll() {
        return api.get('/api/servicios/')
    },

    getById(id) {
        return api.get(`/api/servicios/${id}/`)
    },

    create(servicioData) {
        return api.post('/api/servicios/', servicioData)
    },

    update(id, servicioData) {
        return api.put(`/api/servicios/${id}/`, servicioData)
    },

    delete(id) {
        return api.delete(`/api/servicios/${id}/`)
    }
}