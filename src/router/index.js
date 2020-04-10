import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../components/About.vue";
import Songs from "../components/Songs.vue";

Vue.use(VueRouter);

const routes = new VueRouter({
  path: "/home",
  name: "Home",
  component: Home,
  children: [
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/songs",
      name: "Songs",
      component: Songs,
    },
  ],
  scrollBehavior: function(to) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  base: process.env.BASE_URL,
  mode: "history",
});

/* const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
}); */

export default routes;
