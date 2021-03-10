<template>
  <div class="home">
    <router-link to="/profile">All profiles</router-link>
  </div>
</template>

<style></style>

<script>
// import axios from "axios";
export default {
  data: function() {
    return {
      profiles: [],
    };
  },
  // created: function() {
  //   this.indexprofiles();
  // },
  // methods: {
  //   indexprofiles: function() {
  //     axios.get("/api/profiles").then(response => {
  //       console.log("profiles index", response);
  //       this.profiles = response.data;
  //     });
  //   },
  // },
};
</script>
