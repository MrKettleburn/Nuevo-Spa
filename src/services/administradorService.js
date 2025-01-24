import api from '../api'

export const administradorService = {
    getAll() {
        return api.get('/api/users/administradores/') 
    },

    getById(id) {
        return api.get(`/api/users/administradores/${id}/`)
    },

    create(adminData) {
        return api.post('/api/users/administradores/', adminData)
    },

    update(id, adminData) {
        return api.patch(`/api/users/administradores/${id}/`, adminData)
    },

    delete(id) {
        return api.delete(`/api/users/administradores/${id}/`)
    }
}