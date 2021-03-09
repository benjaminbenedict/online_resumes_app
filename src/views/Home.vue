<template>
  <div class="home">
    <h1>All Profiles</h1>
    <div v-for="profile in profiles" :key="profile.id">
      <h2>{{ profile.name }}</h2>
      <img v-bind:src="profile.url" v-bind:alt="profile.name" />
      <p>Width: {{ profile.width }}</p>
      <p>Height: {{ profile.height }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      profiles: [],
    };
  },
  created: function() {
    this.indexprofiles();
  },
  methods: {
    indexprofiles: function() {
      axios.get("/api/profiles").then(response => {
        console.log("profiles index", response);
        this.profiles = response.data;
      });
    },
  },
};
</script>
