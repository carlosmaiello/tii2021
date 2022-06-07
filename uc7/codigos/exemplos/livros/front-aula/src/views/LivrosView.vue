<script setup lang="ts">
import { computed, onMounted } from 'vue';
import Livro from '../components/Livro.vue'
import AppHeader from '../components/AppHeader.vue'
import { useLivrosStore } from '../stores/livros'
import { useRouter } from 'vue-router';

const store = useLivrosStore();
const livros = computed(() => store.items)

const router = useRouter();

const novo = () => {
    router.push('/livros/novo');
}

onMounted(async () => {
    if (store.items.length == 0)
        await store.listar();
})
</script>
<template>
    <div class="livros-view">
        <AppHeader />
        <hr>
        <button @click="novo">Novo</button>
        <h1>Livros</h1>
        <div class="livros">
            <livro v-for="l in livros" :key="l.id" :livro="l" />
        </div>
    </div>
</template>


<style>
.livros {
    display: flex;
    flex-wrap: wrap;
}

.livros .livro {
    border: 1px solid black;
    margin: 0 10px 10px;
    padding: 10px;
    flex: 0 0 120px;
}

.livros .livro h3 {
    margin: 0;
}
</style>