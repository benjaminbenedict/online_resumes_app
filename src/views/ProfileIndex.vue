<template>
  <div class="Index">
    <h1>All profiles</h1>
    Search:
    <input v-model="titleFilter" type="text" list="profile-titles" />
    <datalist id="profile-titles">
      <option v-for="profile in profiles" v-bind:key="profile.id">{{ profile.name }}</option>
    </datalist>
    <h2>{{ profile.name }}</h2>
    <img v-bind:src="photo.url" v-bind:alt="profile.name" />
    <!-- <p>Width: {{ resume.width }}</p>
      <p>Height: {{ resume.height }}</p> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  data: function() {
    return {
      profiles: {},
    };
  },
  created: function() {
    this.indexProfile();
  },
  methods: {
    indexProfile: function() {
      axios.get("/api/profiles").then(response => {
        console.log("All profiles", response);
        this.profiles = response.data;
      });
    },
  },
};
</script>
