<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <a v-bind:href="`/posts/${post.id}/edit`">Edit This Post</a>
    <br />
    <a href="/posts">Back to all Posts</a>
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
