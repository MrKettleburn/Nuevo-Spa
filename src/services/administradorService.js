import api from '../api'

export const administradorService = {
    getAll() {
        return api.get('/api/administradores/')
    },

    getById(id) {
        return api.get(`/api/administradores/${id}/`)
    },

    create(adminData) {
        return api.post('/api/administradores/', adminData)
    },

    update(id, adminData) {
        return api.put(`/api/administradores/${id}/`, adminData)
    },

    delete(id) {
        return api.delete(`/api/administradores/${id}/`)
    }
}