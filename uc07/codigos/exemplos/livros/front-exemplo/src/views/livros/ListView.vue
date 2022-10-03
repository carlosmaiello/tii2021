<template>
  <ul class="nav nav-pills my-3">
    <li class="nav-item">
      <router-link to="/livros/new" class="nav-link">Novo</router-link>
    </li>
  </ul>
  <ul class="row g-4 list-unstyled">
    <li v-for="livro in livros" :key="livro.id" class="col-6 col-sm-3">
      <livro :livro="livro" />
    </li>
  </ul>
</template>

<script>
import Livro from "../../components/items/Livro.vue";
import { useLivrosStore } from "../../stores/livros";

const store = useLivrosStore();

export default {
    components: { Livro },
    computed: {
      livros: () => store.livros
    },
    mounted () {
      store.listar();
    }
};
</script>

<style>
</style>