<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView, useRouter } from 'vue-router'
import { useSistemaStore } from './stores/sistema';

const store = useSistemaStore();

const router = useRouter();

onMounted(async () => { 
  try {
    await store.getUsuario();
  }
  catch (error) {
    router.push('/login');
  }
})
</script>

<template>
  <RouterView />
</template>