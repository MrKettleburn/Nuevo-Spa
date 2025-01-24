<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F9A392] to-[#F9D4C5] p-4">
    <div class="bg-white w-full max-w-md rounded-lg shadow-xl overflow-hidden" data-aos="fade-up">
      <div class="relative h-48 bg-[#F9A392]">
        <svg class="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div class="px-8 py-6">
        <h2 class="text-2xl font-bold text-center mb-6 text-[#F9A392]" data-aos="fade-down">
          {{ isLogin ? 'Welcome Back!' : 'Create Account' }}
        </h2>
        <form @submit.prevent="handleSubmit">
          <div class="space-y-4"> 
            <template v-if="!isLogin">
              <div data-aos="fade-right" data-aos-delay="200">
                <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" id="firstName" v-model="firstName" required
                       class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
                       :class="{ 'border-red-500': errors.firstName }"
                />
                <p v-if="errors.firstName" class="mt-1 text-xs text-red-500">{{ errors.firstName }}</p>
              </div>
              <div data-aos="fade-right" data-aos-delay="300">
                <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" id="lastName" v-model="lastName" required
                       class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
                       :class="{ 'border-red-500': errors.lastName }"
                />
                <p v-if="errors.lastName" class="mt-1 text-xs text-red-500">{{ errors.lastName }}</p>
              </div>
              <div data-aos="fade-right" data-aos-delay="300">
                <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" id="address" v-model="address" required
                       class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
                       :class="{ 'border-red-500': errors.address }"
                />
                <p v-if="errors.address" class="mt-1 text-xs text-red-500">{{ errors.address }}</p>
              </div>
              <div data-aos="fade-right" data-aos-delay="200">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="text" id="email" v-model="email" required
                       class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
                       :class="{ 'border-red-500': errors.email }"
                />
                <p v-if="errors.email" class="mt-1 text-xs text-red-500">{{ errors.email }}</p>
              </div>
            </template>
              <div data-aos="fade-right" data-aos-delay="200">
                <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                <input type="text" id="username" v-model="username" required
                       class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
                       :class="{ 'border-red-500': errors.username }"
                />
                <p v-if="errors.username" class="mt-1 text-xs text-red-500">{{ errors.username }}</p>
              </div>
            <div data-aos="fade-right" data-aos-delay="500">
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" v-model="password" required
                     class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
                     :class="{ 'border-red-500': errors.password }"
              />
              <p v-if="errors.password" class="mt-1 text-xs text-red-500">{{ errors.password }}</p>
            </div>
            <div v-if="!isLogin" data-aos="fade-right" data-aos-delay="600">
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input type="password" id="confirmPassword" v-model="confirmPassword" required
                     class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#F9A392] focus:ring-1 focus:ring-[#F9A392]"
                     :class="{ 'border-red-500': errors.confirmPassword }"
              />
              <p v-if="errors.confirmPassword" class="mt-1 text-xs text-red-500">{{ errors.confirmPassword }}</p>
            </div>
          </div>
          <div class="mt-6" data-aos="fade-up" data-aos-delay="700">
            <button type="submit"
                    class="w-full px-4 py-2 text-sm font-medium text-white bg-[#F9A392] rounded-md hover:bg-[#F7917E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F9A392] transition-colors duration-300"
            >
              {{ isLogin ? 'Sign In' : 'Sign Up' }}
            </button>
          </div>
        </form>
        <div class="mt-4 text-center" data-aos="fade-up" data-aos-delay="800">
          <button @click="toggleForm" class="text-sm text-[#F9A392] hover:underline focus:outline-none">
            {{ isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { login } from '../services/authService.js';
import { clienteService } from '../services/clienteService.js';
import { useRouter } from 'vue-router';
import { useAuth } from '../services/useAuth.js';

const router = useRouter();

const { loginC } = useAuth();
// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
});

const isLogin = ref(true);
const username = ref('');
const password = ref('');
const confirmPassword = ref('');
const firstName = ref('');
const lastName = ref('');
const address = ref('');
const email = ref('');
const errors = ref({});

const toggleForm = () => {
  isLogin.value = !isLogin.value;
  username.value = '';
  password.value = '';
  confirmPassword.value = '';
  firstName.value = '';
  lastName.value = '';
  address.value = '';
  email.value = '';
  errors.value = {};
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const validatePassword = (password) => {
  return password.length >= 8;
};

const validateName = (name) => {
  return name.length >= 2;
};

const validateAddress = (address) => {
  return address.length >= 5;
};

const handleSubmit = async () => {
  errors.value = {};

  // Validaciones comunes
  if (!username.value) {
    errors.value.username = 'Username is required';
  }
  if (!validatePassword(password.value)) {
    errors.value.password = 'Password must be at least 8 characters long';
  }

  // Validaciones adicionales para registro
  if (!isLogin.value) {
    if (!validateEmail(email.value)) {
    errors.value.email = 'Please enter a valid email address'
    }
    if (!validateName(firstName.value)) {
      errors.value.firstName = 'First name must be at least 2 characters long';
    }
    if (!validateName(lastName.value)) {
      errors.value.lastName = 'Last name must be at least 2 characters long';
    }
    if (!validateAddress(address.value)) {
      errors.value.address = 'Address must be at least 5 characters long';
    }
    if (password.value !== confirmPassword.value) {
      errors.value.confirmPassword = 'Passwords do not match';
    }
  }

  // Si no hay errores, se envían los datos
  if (Object.keys(errors.value).length === 0) {
    if (isLogin.value) {
      try {
        const response = await login(username.value, password.value);
        loginC()
        alert('Login successful!');
        router.push('/');
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials.');
      }
    } else {
      try {
        const clienteData = {
          usuario: {
            first_name: firstName.value,
            last_name: lastName.value,
            username: username.value,
            email: email.value,
            password: password.value,
          },
          direccion: address.value,
        };
        const response = await clienteService.create(clienteData);
        alert('Registration successful! Please login.');
        toggleForm();
      } catch (error) {
        console.error('Registration failed:', error);
        alert('Registration failed. Please try again.');
      }
    }
  }
};
</script>
