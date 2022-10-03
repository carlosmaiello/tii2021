import { defineStore } from 'pinia'
import { api } from '../api'

export const useSistemaStore = defineStore({
  id: "sistema",
  state: () => ({
    logado: false,
    usuario: null,
  }),
  actions: {
    async getUsuario() {
      api.defaults.headers.common["Authorization"] = `JWT ${localStorage.getItem("token")}`;

      const res = await api.get("/usuarios/eu");
      this.usuario = res.data;
      this.logado = true;
    },

    async login(email: string, senha: string) {
      const res = await api.post("/usuarios/login", { email, senha });

      api.defaults.headers.common["Authorization"] = `JWT ${localStorage.getItem("token")}`;

      this.usuario = res.data.usuario;
      this.logado = true;

      localStorage.setItem("token", res.data.token);
    },
    logout() {
      this.logado = false;
      this.usuario = null;
      localStorage.removeItem("token");
    },
  },
});
