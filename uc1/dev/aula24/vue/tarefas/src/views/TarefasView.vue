<template>
  <div>
    <tarefa-form />
    <tarefa-lista :tarefas="tarefas" />
  </div>
</template>

<script>
import TarefaForm from '../components/TarefaForm.vue';
import TarefaLista from '../components/TarefaLista.vue';
export default {
  components: { TarefaForm, TarefaLista },
  data () {
      return {
          tarefas: [
              {
                  id: 1,
                  titulo: 'Tarefa 1',
                  concluida: false
              },
              {
                  id: 2,
                  titulo: 'Tarefa 2',
                  concluida: false
              },
              {
                  id: 3,
                  titulo: 'Tarefa 3',
                  concluida: true
              }
          ]
      }
  }
};
</script>

<style>
</style>