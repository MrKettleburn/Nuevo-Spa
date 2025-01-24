import api from '../api'

export const clienteService = {
    getAll() {
        return api.get('/api/users/clientes/')
    },

    getById(id) {
        return api.get(`/api/users/clientes/${id}/`)
    },

    create(clienteData) {
        return api.post('/api/users/clientes/', clienteData)
    },

    update(id, clienteData) {
        return api.patch(`/api/users/clientes/${id}/`, clienteData)
    },

    delete(id) {
        return api.delete(`/api/users/clientes/${id}/`)
    }
}