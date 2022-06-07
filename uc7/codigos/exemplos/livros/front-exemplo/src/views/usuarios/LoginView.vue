<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <form class="col-3" @submit.prevent="submit">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" />
      </div>
      <div class="mb-3">
        <label for="senha" class="form-label">Senha</label>
        <input
          type="password"
          class="form-control"
          id="senha"
          v-model="senha"
        />
      </div>
      <button type="submit" class="btn btn-primary">Entrar</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import router from "../../router";
import { useAuthStore } from "../../stores/auth";

export default {
  setup() {
    const email = ref("");
    const senha = ref("");

    const store = useAuthStore();

    const submit = async () => {
      await store.login(email.value, senha.value);
      router.push("/");
    };

    return {
      email,
      senha,
      submit,
    };
  },
};
</script>