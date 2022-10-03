<template>
  <div class="card livro-card">
    <img src="https://via.placeholder.com/640x480" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ livro.nome }}</h5>
      <p class="card-text">{{ livro.sinopse }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ livro.ano }}</li>
      <li class="list-group-item">{{ livro.edicao }}</li>
    </ul>
    <div class="card-body">
      <router-link :to="`/livros/${livro.id}`" class="card-link">Alterar</router-link>
      <a href="#" @click.prevent="excluirClick" class="card-link">Excluir</a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Livro } from "../../models";
import { useLivrosStore } from "../../stores/livros";

const store = useLivrosStore();

export default defineComponent({
  props: {
    livro: {
      type: Object as () => Livro,
    },
  },
  setup(props) {
    const excluirClick = async () => {
      await store.excluir(props.livro.id);
    }

    return { excluirClick }
  },
});
</script>