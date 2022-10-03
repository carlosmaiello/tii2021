<script setup lang="ts">
import { useLivrosStore } from '../stores/livros'
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const store = useLivrosStore();

const nome = ref('');
const sinopse = ref('');
const ano = ref('');
const edicao = ref('');
const autor_id = ref(0);


const autores = computed(() => store.autores);

const enviar = () => {
    try {
        store.inserir({
            nome: nome.value,
            sinopse: sinopse.value,
            ano: ano.value,
            edicao: edicao.value,
            autor_id: autor_id.value
        });

        router.push('/');

    }
    catch (error: any) {
        alert(error.msg);
    }
}

onMounted(async () => {
    if (store.autores.length == 0)
        await store.getAutores();
})

</script>
<template>
    <div>
        <h1>Novo livro</h1>
        <form @submit.prevent="enviar">
            <div class="form-control">
                <label for="" class="form-label">Nome</label>
                <input type="text" class="form-input" v-model="nome" />
            </div>
            <div class="form-control">
                <label class="form-label">Autor</label>
                <select class="form-input" v-model="autor_id">
                    <option value="">Selecione o autor</option>
                    <option v-for="autor in autores" :key="autor.id" :value="autor.id">
                        {{ autor.sobrenome }}, {{ autor.nome }}
                    </option>
                </select>
            </div>
            <div class="form-control">
                <label for="" class="form-label">Sinopse</label>
                <textarea class="form-input" v-model="sinopse"></textarea>
            </div>
            <div class="form-control">
                <label for="" class="form-label">Ano</label>
                <input type="text" class="form-input" v-model="ano" />
            </div>
            <div class="form-control">
                <label for="" class="form-label">Edição</label>
                <input type="text" class="form-input" v-model="edicao" />
            </div>

            <div>
                <button>Gravar</button>
            </div>
        </form>
    </div>
</template>