import axios from 'axios'

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Interceptor para incluir el token en las peticiones
api.interceptors.request.use(
    (config) => {
        // const token = localStorage.getItem('token')
         const token = "061b3f0af5a8cff3ad9b654f6d53ad0aa3b1871c"
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api