import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import axios from "axios";
import ProfileIndex from "../views/ProfileIndex.vue";
import ProfileShow from "../views/ProfileShow.vue";

// axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
// axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "https://whispering-sands-76473.herokuapp.com" : "/";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/profile",
    name: "profile-index",
    component: ProfileIndex,
  },
  {
    path: "/profile/:id",
    name: "profile-show",
    component: ProfileShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
