import { defineStore } from "pinia";
import { apiLogged } from "../rest";

export const useLivrosStore = defineStore({
    id: "livros",
    state: () => ({
        livros: []
    }),
    actions: {
        async listar() {
            const res = await apiLogged.get('/livros');
            this.livros = res.data;
            return this.livros;
        },
        async inserir(livro) {
            const res = await apiLogged.post('/livros', livro);
            this.livros.push(res.data);
            return res.data;
        },
        async excluir(id) {
            const res = await apiLogged.delete(`/livros/${id}`);
            this.livros.slice(this.livros.findIndex((l) => l.id == id), 1);
        }
    }
});