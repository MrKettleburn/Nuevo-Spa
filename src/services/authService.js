// services/authService.js
import api from '../api'

export const authService = {
    login(credentials) {
        return api.post('/api/users/login/', credentials)
    },

    register(userData) {
        return api.post('/api/users/register/', userData)
    }
}