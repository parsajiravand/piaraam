<template>
  <div class="home">
    <Nav/>
    <About />
    <Youtube />
    <SoundCloud />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from "@/components/Nav";
import About from "@/components/About";
import Youtube from "@/components/Youtube";
import SoundCloud from "@/components/SoundCloud";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    Nav,
    About,
    Youtube,
    SoundCloud,
    Footer,
    
  }
};
</script>
