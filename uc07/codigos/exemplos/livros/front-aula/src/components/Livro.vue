<template>
    <div class="livro">
        <h3>{{ livro.nome }}</h3>
        <p>{{ livro.sinopse }}</p>        
    </div>
</template>

<script lang="ts">
export default {
    props: ['livro']
}
</script>

<style>

</style>