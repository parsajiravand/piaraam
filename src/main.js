import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueScrollProgressBar from "@guillaumebriday/vue-scroll-progress-bar";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VModal from 'vue-js-modal'
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false;
var VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);
Vue.use(VueScrollProgressBar);
Vue.use(VModal,{ dialog: true });
Vue.config.productionTip = false;
setTimeout(function() {
  new Vue({
    router,
    store,
    $,
    render: (h) => h(App),
  }).$mount("#app");
}, 3000);
