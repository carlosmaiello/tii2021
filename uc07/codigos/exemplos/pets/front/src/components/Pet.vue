<template>
  <div class="card pet-card">
    <img src="https://via.placeholder.com/640x480" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ pet.name }}</h5>
      <p class="card-text">       
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ pet.type }}</li>
      <li class="list-group-item">{{ pet.breed }}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Pet } from "./models";

export default defineComponent({
  props: {
    pet: {
      type: Object as () => Pet,
    },
  },
  setup() {},
});
</script>
