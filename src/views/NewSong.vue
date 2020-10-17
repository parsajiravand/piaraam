<template>
  <div class="newSong">
    <Nav />
    <NewSong />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from "@/components/Nav";
import NewSong from "@/components/newsong/NewSongComponent"
import Footer from "@/components/Footer";

export default {
  name: "NewSong",
  components: {
    Nav,
    NewSong,
    Footer
  }
};
</script>
<style lang="scss">
    .newSong{
    background-color: #000225;
}
</style>