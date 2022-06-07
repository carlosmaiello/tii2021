<template>
  <li class="tarefa-lista-item">
    <div class="titulo">
      {{ tarefa.titulo }}
    </div>
    <div class="concluida">
      {{ tarefa.concluida }}
    </div>
  </li>
</template>

<script>
export default {
  props: ["tarefa"],
};
</script>

<style>
.tarefa-lista-item { display: flex; justify-content: space-between; border-bottom: 1px solid #c1c1c1;}
</style>