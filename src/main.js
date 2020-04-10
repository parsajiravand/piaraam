import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Scrollspy from "vue2-scrollspy";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// use default options
Vue.use(Scrollspy);

Vue.config.productionTip = false;
setTimeout(function() {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
}, 1000);
