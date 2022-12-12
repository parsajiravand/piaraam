import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Login from "../components/Admin/Login.vue";
import {getAuth} from "firebase/auth"

Vue.use(VueRouter);

const routes = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },

    {
      path: "*",
      redirect: "/home",
    },
    {
      path: "/admin",
      name: "admin",
      meta: { needauth: true },
      component: Admin,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
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
function getCookie(token) {
  let name = token + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
routes.beforeEach(function(to, from, next) {
  const auth = getAuth();
  const userExist=getCookie("token")
  let user = auth.currentUser;

  if (to.meta.needauth) {
    if ((user && user!==null) || userExist ) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});


export default routes;
