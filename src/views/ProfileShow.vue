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
    <h2>Experience:</h2>
    <div v-for="experience in experiences" :key="experience.id">
      <h3>{{ experience.company_name }}: {{ experiences.job_title }}</h3>
      <p>Job details: {{ experience.details }}</p>
      <p>From: {{ experiences.start_date }} to {{ experiences.end_date }}</p>
    </div>

    <a class="twitter-timeline" :href="`https://twitter.com/${profile.twitter_handle}?ref_src=twsrc%5Etfw`">
      Tweets by {{ profile.first_name }}
    </a>
    <a href="/profile">Back to all Profiles</a>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      profile: {
        // id: 3,
        // first_name: "Joseph",
        // last_name: "Tastet",
        // email: "joseph@test.com",
        // phone_number: "3333333333",
        // short_bio: "this is joseph's short bio",
        // linkedin_url: "linkedin.com/joseph",
        // twitter_handle: "joseph twitter handle",
        // website_url: "github.io/josephluu",
        // resume_url: "joseph tastet resume url",
        // github_url: "joseph tastet github url",
        // photo: "photo",
      },
      experiences: [],
    };
  },
  created: function() {
    this.showProfile();
  },
  methods: {
    showProfile: function() {
      axios.get("/api/students/" + this.$route.params.id).then(response => {
        console.log(response.data);
        this.profile = response.data;
        this.experiences = this.profile.experiences;
      });
    },
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.head.appendChild(recaptchaScript);
  },
};
</script>
