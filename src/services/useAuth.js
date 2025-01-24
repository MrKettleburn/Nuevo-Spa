import { ref } from 'vue';

const isLoggedIn = ref(!!localStorage.getItem('accessToken'));

const login = () => {
    isLoggedIn.value = true;
};

const logout = () => {
    isLoggedIn.value = false;
};

export function useAuth() {
    return { isLoggedIn, login, logout };
}