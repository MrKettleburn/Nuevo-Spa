import api from '../api'

export const citaService = {
    getAll() {
        return api.get('/api/citas/')
    },

    getById(id) {
        return api.get(`/api/citas/${id}/`)
    },

    create(citaData) {
        return api.post('/api/citas/', citaData)
    },

    update(id, citaData) {
        return api.put(`/api/citas/${id}/`, citaData)
    },

    delete(id) {
        return api.delete(`/api/citas/${id}/`)
    }
}