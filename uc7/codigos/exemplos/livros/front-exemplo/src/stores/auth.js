import { defineStore } from "pinia";
import { getTransitionRawChildren } from "vue";
import { api, apiLogged } from "../rest";

export const useAuthStore = defineStore({
    id: "auth",
    state: () => ({
        isLogged: false,
        usuario: null,
        token: null
    }),
    actions: {
        async login(email, senha) {
            this.isLogged = false;
            const res = await api.post('/usuarios/login', { email, senha });
            this.usuario = res.data.usuario;
            this.token = res.data.token;
            localStorage.setItem('token', this.token);
            apiLogged.defaults.headers['Authorization'] = `JWT ${this.token}`;
            this.isLogged = true;
            return this.usuario;
        },
        logout() {
            this.isLogged = false;
            this.usuario = null;
            this.token = null;
            localStorage.removeItem('token');
        },
        async verificar() {
            const token = localStorage.getItem('token');
            this.isLogged = false;

            if (!token)
                throw new Error('Chave não encontrada');
                
            try {
                apiLogged.defaults.headers['Authorization'] = `JWT ${token}`;
                const res = await apiLogged.get('/usuarios/eu');
                this.token = token;
                this.usuario = res.data;
                this.isLogged = true;
            }
            catch (error) {
                this.logout();
                throw new Error('Chave inválida');
            }
        }
    }
});