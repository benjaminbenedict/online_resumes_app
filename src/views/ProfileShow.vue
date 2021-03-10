<template>
  <div>
    <h2>{{ profile.first_name }} {{ profile.last_name }}</h2>
    <p>Contact Me: email: {{ profile.email }}, phone number: {{ profile.phone_number }}</p>
    <h2>A little about me</h2>
    <p>{{ profile.short_bio }}</p>
    <h2>Check me out @</h2>
    <p>Linkedin: {{ profile.linkedin_url }}</p>
    <p>Twitter: {{ profile.twitter_handle }}</p>
    <p>Personal Website: {{ profile.website_url }}</p>
    <p>github: {{ profile.github_url }}</p>
    <a href="/profile">Back to all Profiles</a>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data: function() {
    return {
      profile: {
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
    };
  },
  // created: function () {
  //   this.showPost();
  // },
  // methods: {
  //   showPost: function () {
  //     axios.get("/api/posts/" + this.$route.params.id).then((response) => {
  //       console.log(response.data);
  //       this.post = response.data;
  //     });
  //   },
  // },
};
</script>
