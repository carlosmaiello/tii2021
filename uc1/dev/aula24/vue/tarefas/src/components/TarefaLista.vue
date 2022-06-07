<template>
  <ul class="tarefa-lista">
    <tarefa-lista-item :tarefa="t" v-for="t in tarefas" :key="t.id" />
  </ul>
</template>

<script>
import TarefaListaItem from "./TarefaListaItem.vue";
export default {
  components: { TarefaListaItem },
  props: ["tarefas"],
};
</script>

<style>
.tarefa-lista {
  padding-left: 0;
}
</style>