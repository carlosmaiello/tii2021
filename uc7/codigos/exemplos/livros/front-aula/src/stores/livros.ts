import { api } from '@/api';
import { defineStore } from 'pinia'

export const useLivrosStore = defineStore({
  id: "livros",
  state: () => ({
    items: [],
    autores: [],
  }),
  actions: {
    async listar() {
      const res = await api.get("/livros");
      this.items = res.data;
    },
    async inserir(livro: any): Promise<any> {
      const res = await api.post("/livros", livro);
      await this.listar();
      return res.data;
    },
    async getAutores() {
      const res = await api.get("/autores");
      console.log(res.data);
      this.autores = res.data;
    },
  },
});
