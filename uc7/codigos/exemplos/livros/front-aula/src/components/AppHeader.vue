<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useSistemaStore } from "../stores/sistema";

const store = useSistemaStore();
const usuario = computed(() => store.usuario)
const logado = computed(() => store.logado)

const router = useRouter();

const sair = () => {
    store.logout();
    router.push('/login');
}

</script>
<template>
<header>
    <div v-if="logado">
        {{ usuario.nome }}
        <button @click="sair">Sair</button>
    </div>
    
</header>    
</template>