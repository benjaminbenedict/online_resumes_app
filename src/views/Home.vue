<template>
  <div class="home">
    <h1 href="/profile">All Profiles</h1>
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
