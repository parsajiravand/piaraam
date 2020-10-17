import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueScrollProgressBar from "@guillaumebriday/vue-scroll-progress-bar";
import './registerServiceWorker'

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
var VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);
Vue.use(VueScrollProgressBar);
Vue.config.productionTip = false;

new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");

