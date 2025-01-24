import { ref } from 'vue';

const isLoggedIn = ref(!!localStorage.getItem('accessToken'));

const loginC = () => {
    isLoggedIn.value = true;
};

const logout = () => {
    isLoggedIn.value = false;
};

export function useAuth() {
    return { isLoggedIn, loginC, logout };
}