import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },

    {
      path: "*",
      redirect: "/home"
    }
  ],

  scrollBehavior: function(to) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  mode: "history"
});

/* const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
}); */

export default routes;
