import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SingUp from "../components/auth/SignUp";
import Login from "../components/auth/Login";
import Admin from "../views/Admin";
import NewSong from "../views/NewSong";

Vue.use(VueRouter);

const routes = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SingUp,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/Admin",
      name: "Admin",
      component: Admin,
    },
    {
      path: "/newsong",
      name: "NewSong",
      component: NewSong,
    },
    {
      path: "*",
      redirect: "/home",
    },
  ],

  scrollBehavior: function(to) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  mode: "history",
});

/* const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
}); */

export default routes;
