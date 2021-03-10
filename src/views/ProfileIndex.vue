<template>
  <div class="home">
    <h1>All Profiles</h1>
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
// import axios from "axios";
export default {
  data: function() {
    return {
      profiles: [
        {
          id: 1,
          first_name: "Owen",
          last_name: "Luu",
          email: "owen@test.com",
          phone_number: "1111111111",
          short_bio: "this is owen's short bio",
          linkedin_url: "linkedin.com/owen",
          twitter_handle: "Owen twitter handle",
          website_url: "github.io/owenluu",
          resume_url: "owen luu resume url",
          github_url: "owen luu github url",
          photo: "photo",
        },
        {
          id: 2,
          first_name: "Ben",
          last_name: "Benedict",
          email: "ben@test.com",
          phone_number: "2222222222",
          short_bio: "this is ben's short bio",
          linkedin_url: "linkedin.com/ben",
          twitter_handle: "ben twitter handle",
          website_url: "github.io/benluu",
          resume_url: "ben luu resume url",
          github_url: "ben luu github url",
          photo: "photo",
        },
        {
          id: 3,
          first_name: "Joseph",
          last_name: "Tastet",
          email: "joseph@test.com",
          phone_number: "3333333333",
          short_bio: "this is joseph's short bio",
          linkedin_url: "linkedin.com/joseph",
          twitter_handle: "joseph twitter handle",
          website_url: "github.io/josephluu",
          resume_url: "joseph luu resume url",
          github_url: "joseph luu github url",
          photo: "photo",
        },
      ],
    };
  },
  //   created: function() {
  //     this.indexProfile();
  //   },
  //   methods: {
  //     indexProfile: function() {
  //       axios.get("/api/profiles").then(response => {
  //         console.log("All Profiles", response);
  //         this.profiles = response.data;
  //       });
  //     },
  //   },
};
</script>
