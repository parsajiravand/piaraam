<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Biography msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Biography from "@/components/homeDetail/Biography";

export default {
  name: "Home",
  components: {
    Biography
  }
};
</script>
