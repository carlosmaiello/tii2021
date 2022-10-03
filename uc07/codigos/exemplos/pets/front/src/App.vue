<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">MyPets</RouterLink>
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
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/pets" class="nav-link">Pets</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link">About</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main class="container-fluid py-3">
    <RouterView />
  </main>
  <footer></footer>
</template>

<style>
</style>
