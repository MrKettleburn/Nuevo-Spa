import api from '../api'

export const especialistaService = {
    getAll() {
        return api.get('/api/especialistas/')
    },

    getById(id) {
        return api.get(`/api/especialistas/${id}/`)
    },

    create(especialistaData) {
        return api.post('/api/especialistas/', especialistaData)
    },

    update(id, especialistaData) {
        return api.put(`/api/especialistas/${id}/`, especialistaData)
    },

    delete(id) {
        return api.delete(`/api/especialistas/${id}/`)
    }
}