<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">MyBooks</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Livros</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">Sobre</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a href="#" @click="logoutClick" class="nav-link">Sair</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import router from "../../router";
import { useAuthStore } from "../../stores/auth";
export default {
  setup() {
    const store = useAuthStore();

    const logoutClick = () => {
      store.logout();
      router.replace("/auth/login");
    };

    return { logoutClick };
  },
};
</script>