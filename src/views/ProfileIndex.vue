<template>
  <div>
    <!-- <h1>Student Profiles:</h1>
    Search:
    <input v-model="firstNameFilter" type="text" list="profile-first_names" />
    <datalist class="profile-first_names">
      <option v-for="profile in profiles" :key="profile.id">{{ profile.first_name }} {{ profile.last_name }}/></option>
    </datalist> -->
    <div
      is="transition-group"
      class="row"
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="col-sm-6" v-for="profile in profiles" v-bind:key="profile.id">
        <div class="card">
          <img :src="profile.photo" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ profile.first_name }} {{ profile.last_name }}</h5>
            <p class="card-text">{{ profile.short_bio }}</p>
            <a :href="`/profile/${profile.id}`" class="btn btn-primary">View Profile</a>
          </div>
        </div>
        <br />
      </div>
    </div>
    <a class="twitter-timeline" :href="`https://twitter.com/${profiles[0].twitter_handle}?ref_src=twsrc%5Etfw`">
      Tweets by {{ profiles[0].first_name }}
    </a>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      profiles: [
        // {
        //   id: 1,
        //   first_name: "Owen",
        //   last_name: "Luu",
        //   email: "owen@test.com",
        //   phone_number: "1111111111",
        //   short_bio: "this is owen's short bio",
        //   linkedin_url: "linkedin.com/owen",
        //   twitter_handle: "Owen twitter handle",
        //   website_url: "github.io/owenluu",
        //   resume_url: "owen luu resume url",
        //   github_url: "owen luu github url",
        //   photo: "photo",
        // },
        // {
        //   id: 2,
        //   first_name: "Ben",
        //   last_name: "Benedict",
        //   email: "ben@test.com",
        //   phone_number: "2222222222",
        //   short_bio: "this is ben's short bio",
        //   linkedin_url: "linkedin.com/ben",
        //   twitter_handle: "ben twitter handle",
        //   website_url: "github.io/benluu",
        //   resume_url: "ben luu resume url",
        //   github_url: "ben luu github url",
        //   photo: "photo",
        // },
        // {
        //   id: 3,
        //   first_name: "Joseph",
        //   last_name: "Tastet",
        //   email: "joseph@test.com",
        //   phone_number: "3333333333",
        //   short_bio: "this is joseph's short bio",
        //   linkedin_url: "linkedin.com/joseph",
        //   twitter_handle: "joseph twitter handle",
        //   website_url: "github.io/josephluu",
        //   resume_url: "joseph luu resume url",
        //   github_url: "joseph luu github url",
        //   photo: "photo",
        // },
      ],
      firstNameFilter: "",
    };
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.head.appendChild(recaptchaScript);
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
  created: function() {
    this.indexProfile();
  },
  methods: {
    indexProfile: function() {
      axios.get("/api/students").then(response => {
        console.log("All Profiles", response);
        this.profiles = response.data;
      });
    },
  },
};
</script>
