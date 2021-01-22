<template>
  <div class="newSong">
    <Nav />

    <NewSongComponent />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from "@/components/Nav";
import NewSongComponent from "@/components/newsong/NewSongComponent";
import Footer from "@/components/Footer";

export default {
  name: "NewSong",
  components: {
    Nav,
    NewSongComponent,
    Footer,
  },
};
</script>
<style lang="scss">
.newSong {
  background-color: #000225;
}
</style>
