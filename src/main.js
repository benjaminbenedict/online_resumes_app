import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "https://whispering-sands-76473.herokuapp.com" : "https://whispering-sands-76473.herokuapp.com";
Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
