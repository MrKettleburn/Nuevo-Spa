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

    const { access, refresh } = response.data; // Supongo que los tokens son "access" y "refresh"
    localStorage.setItem('accessToken', access); // Guardar el token de acceso
    localStorage.setItem('refreshToken', refresh); // Guardar el token de refresco
    return response.data;
};

// Función para cerrar sesión
export const logout = async () => {
    const refreshToken = localStorage.getItem('refreshToken');

    if (refreshToken) {
        try {
            // Enviar el refresh token al backend para invalidarlo
            await api.post('/api/users/logout/', { refresh: refreshToken }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
        } catch (error) {
            console.error('Error al cerrar sesión en el backend:', error);
        }
    }

    // Eliminar los tokens del almacenamiento local
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
};

// Función para verificar si el usuario está autenticado
export const isAuthenticated = () => {
    const token = localStorage.getItem('accessToken');
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

export function getToken() {
    return localStorage.getItem('accessToken');
  }
  
export function getRoleFromToken() {
    const token = getToken();
    if (token) {
      const decoded = JSON.parse(atob(token.split('.')[1])); // Decodifica el JWT
      return decoded.role || ''; // Retorna el rol del token
    }
    return '';
  }