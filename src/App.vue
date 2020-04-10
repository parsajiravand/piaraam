<template>
  <div id="app">
      <Home />
  </div>
</template>
<script>
import Home from "./views/Home";
export default {
  components: {
    Home
  }
};
</script>
<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
@import "./style/app.css";
</style>
