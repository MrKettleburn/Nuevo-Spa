import api from '../api'

export const usersService = {
    getAll() {
        return api.get('/api/users/users/')
    },

    getById(id) {
        return api.get(`/api/users/users/${id}/`)
    },

    create(clienteData) {
        return api.post('/api/users/users/', clienteData)
    },

    update(id, clienteData) {
        return api.put(`/api/users/users/${id}/`, clienteData)
    },

    delete(id) {
        return api.delete(`/api/users/users/${id}/`)
    }
}