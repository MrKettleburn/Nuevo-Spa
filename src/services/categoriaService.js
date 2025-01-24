import api from '../api'

export const categoriaService = {
    getAll() {
        return api.get('/api/business/categorias/')
    },

    getById(id) {
        return api.get(`/api/business/categorias/${id}/`)
    },

    create(especialistaData) {
        return api.post('/api/business/categorias/', especialistaData)
    },

    update(id, especialistaData) {
        return api.put(`/api/business/categorias/${id}/`, especialistaData)
    },

    delete(id) {
        return api.delete(`/api/business/categorias/${id}/`)
    }
}