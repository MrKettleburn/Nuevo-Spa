import api from '../api'

export const clienteService = {
    getAll() {
        return api.get('/api/clientes/')
    },

    getById(id) {
        return api.get(`/api/clientes/${id}/`)
    },

    create(clienteData) {
        return api.post('/api/clientes/', clienteData)
    },

    update(id, clienteData) {
        return api.put(`/api/clientes/${id}/`, clienteData)
    },

    delete(id) {
        return api.delete(`/api/clientes/${id}/`)
    }
}