import axios from 'axios'
import { useRouter } from 'vue-router';
import router from '../router';

export const api = axios.create({
    baseURL: 'http://localhost:3000',
});

export const apiLogged = axios.create({
    baseURL: 'http://localhost:3000',
});

// Interceptando as mensagens de erro
apiLogged.interceptors.response.use((response) => {
    return response;
},(error) => {   
    if (error.response && error.response.status == 401) {
        router.replace('/auth/login')
    }

    return Promise.reject(error);
});