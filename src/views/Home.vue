<template>
  <div class="home">
    <Nav />
    <About />
    <Songs />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav";
import About from "@/components/About";
import Songs from "@/components/Songs"

export default {
  name: "Home",
  components: {
   Nav,
    About,
    Songs
  }
};
</script>
