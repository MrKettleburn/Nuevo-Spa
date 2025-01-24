import axios from 'axios'

const getCSRFToken = () => {
    const csrfCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('csrftoken='));
    return csrfCookie ? csrfCookie.split('=')[1] : null;
};

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
        // Obtener el token de autorización
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Obtener el CSRF token
        const csrfToken = getCSRFToken();
        if (csrfToken) {
            config.headers['X-CSRFTOKEN'] = csrfToken;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api