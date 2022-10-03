<template>
  <div class="livro">
    <h1>{{ livro.nome }}</h1>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
  setup() {
      const livros = computed(() => {
          return {}
      })
  },
};
</script>
