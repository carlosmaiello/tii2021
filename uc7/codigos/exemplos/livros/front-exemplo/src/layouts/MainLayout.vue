<template>
  <div class="pagina" v-if="isLogged">
    <Topo />
    <main class="container-fluid py-3">
      <RouterView />
    </main>
    <Rodape />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Topo from "../components/layout/Topo.vue";
import Rodape from "../components/layout/Rodape.vue";
import { computed, onBeforeMount, onMounted } from "@vue/runtime-core";
import router from "../router";
import { useAuthStore } from "../stores/auth";

export default {
  components: {
    RouterView, Topo, Rodape
  },
  setup() {
    const store = useAuthStore();

    const isLogged = computed(() => store.isLogged);

    onBeforeMount(async () => {
      try {
        console.log('App');
        await store.verificar();
      } catch (error) {
        console.log('Error: ', error);
        router.replace("/auth/login");
        return false;
      }
    });

    return {
      isLogged
    }
  }
}

</script>