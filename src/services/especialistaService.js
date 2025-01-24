import api from '../api'

export const especialistaService = {
    getAll() {
        return api.get('/api/users/especialistas/')
    },

    getById(id) {
        return api.get(`/api/users/especialistas/${id}/`)
    },

    create(especialistaData) {
        return api.post('/api/users/especialistas/', especialistaData)
    },

    update(id, especialistaData) {
        return api.patch(`/api/users/especialistas/${id}/`, especialistaData)
    },

    delete(id) {
        return api.delete(`/api/users/especialistas/${id}/`)
    }
}