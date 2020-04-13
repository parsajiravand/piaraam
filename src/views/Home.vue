<template>
  <div class="home">
    <!--   <AppLogin />
    <Login />-->
    <Nav />
    <About />
    <Songs />
  </div>
</template>

<script>
// @ is an alias to /src
/* import AppLogin from "@/components/admin/AppLogin";
import Login from "@/components/admin/Login"; */
import Nav from "@/components/Nav";
import About from "@/components/About";
import Songs from "@/components/Songs";

export default {
  name: "Home",
  components: {
    /*    AppLogin,
    Login, */
    Nav,
    About,
    Songs
  }
};
</script>
