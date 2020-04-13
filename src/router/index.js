import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../components/About.vue";
import Youtube from "../components/Youtube.vue";
import Login from "../components/admin/Login.vue";
import Secure from "../components/admin/Secure.vue";

Vue.use(VueRouter);

const routes = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      children: [
        {
          path: "/about",
          name: "About",
          component: About
        },
        {
          path: "/Youtube",
          name: "Youtube",
          component: Youtube
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/secure",
      name: "secure",
      component: Secure
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
