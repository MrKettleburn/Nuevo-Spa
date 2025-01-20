import api from '../api';

// Función para registrar un usuario
export const register = async (username, email, password) => {
    const response = await api.post('/api/users/register/', {
        username,
        email,
        password,
    });
    return response.data; // Opcional: puedes devolver datos adicionales según tu API
};

// Función para iniciar sesión y guardar el token
export const login = async (username, password) => {
    const response = await api.post('/api/users/login/', {
        username,
        password,
    });

    const { token } = response.data; // Supongo que el token se llama "token"
    localStorage.setItem('token', token); // Guardar el token en localStorage
    return response.data;
};

// Función para cerrar sesión
export const logout = () => {
    localStorage.removeItem('token'); // Eliminar el token de localStorage
};

// Función para verificar si el usuario está autenticado
export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
        // Decodificar el token y verificar si expiró
        const payload = JSON.parse(atob(token.split('.')[1])); // Decodificar la parte del payload del JWT
        const now = Math.floor(Date.now() / 1000); // Tiempo actual en segundos
        return payload.exp > now; // Comparar tiempo de expiración con el tiempo actual
    } catch (error) {
        console.error('Error al verificar el token:', error);
        return false;
    }
};