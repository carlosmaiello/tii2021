<template>
  <ul class="nav nav-pills my-3">
    <li class="nav-item">
      <router-link to="/pets/new" class="nav-link">Novo</router-link>
    </li>
  </ul>
  <ul class="row list-unstyled">
    <li v-for="pet in pets" :key="pet.id" class="col-6 col-sm-3">
      <Pet :pet="pet" />
    </li>
  </ul>
</template>

<script>
import Pet from "../../components/Pet.vue";
export default {
  components: { Pet },
  data() {
    return {
      pets: [
        {
          id: 1,
          name: "Rex",
          type: "dog",
          breed: "NDB",
        },
        {
          id: 2,
          name: "Luna",
          type: "dog",
          breed: "Basset Hound",
        },
        {
          id: 3,
          name: "Spyke",
          type: "dog",
          breed: "Basset Hound",
        },
        {
          id: 3,
          name: "Spyke",
          type: "dog",
          breed: "Basset Hound",
        },
        {
          id: 3,
          name: "Spyke",
          type: "dog",
          breed: "Basset Hound",
        },
        {
          id: 3,
          name: "Spyke",
          type: "dog",
          breed: "Basset Hound",
        },
      ],
    };
  },
};
</script>

<style>
</style>