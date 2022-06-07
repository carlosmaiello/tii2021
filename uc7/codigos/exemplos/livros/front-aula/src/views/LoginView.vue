<template>
    <form @submit.prevent="submitForm">
        <div class="">
            <label for="email">E-mail</label>
            <input type="text" id="email" v-model="email">
        </div>
        <div class="">
            <label for="senha">Senha</label>
            <input type="password" id="senha" v-model="senha">
        </div>
        <div>
            <button type="submit">Entrar</button>
        </div>
    </form>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import { useSistemaStore } from '../stores/sistema';
import { useRouter } from 'vue-router';
export default {
    setup () {
        const senha = ref('');
        const email = ref('');

        const store = useSistemaStore();
        const router = useRouter();
        
        const submitForm = async () => {
            await store.login(email.value, senha.value);
            await router.replace('/');
        }

        return {
            email,
            senha,
            submitForm
        }
    }
}
</script>

<style>

</style>