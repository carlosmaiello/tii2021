<script setup>
import { ref } from 'vue';
import router from '../../router';
import { useLivrosStore } from '../../stores/livros';

const nome = ref("");
const sinopse = ref("");
const edicao = ref("");
const ano = ref(0);

const store = useLivrosStore();

const formSubmit = async () => {
    let livro = {
        nome: nome.value,
        sinopse: sinopse.value,
        edicao: edicao.value,
        ano: ano.value
    };
    
    await store.inserir(livro);

    router.replace('/');
}
</script>

<template>
    <div class="row">
        <div class="col-8">
            <h1>Novo Livro</h1>
            <form class="row g-3" @submit.prevent="formSubmit">
                <div class="col-12">
                    <label for="nome" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="nome" v-model="nome" />
                </div>
                <div class="col-12">
                    <label for="sinopse" class="form-label">Sinopse</label>
                    <textarea type="text" class="form-control" id="sinopse" v-model="sinopse"></textarea>
                </div>
                <div class="col-md-6">
                    <label for="ano" class="form-label">Ano</label>
                    <input type="text" class="form-control" id="ano" v-model="ano" />
                </div>
                <div class="col-md-6">
                    <label for="edicao" class="form-label">Edição</label>
                    <input type="text" class="form-control" id="edicao" v-model="edicao" />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Salvar</button>
                </div>
            </form>
        </div>
        <div class="col-4"></div>
    </div>
</template>

