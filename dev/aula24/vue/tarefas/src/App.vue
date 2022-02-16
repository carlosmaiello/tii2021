<template>
  <div>
    <topo />
    <tarefas-view />
    <rodape />
  </div>
</template>
<script>
import Rodape from './components/Rodape.vue'
import Topo from './components/Topo.vue'
import TarefasView from './views/TarefasView.vue'
export default {
  components: { Topo, Rodape, TarefasView },
}
</script>
<style></style>
