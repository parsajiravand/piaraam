<template>
  <div id="app">
    
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <b-button variant="danger">Test</b-button>
      <button class="btn btn-success">Test</button>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

body {
  background-color: #000350;
}
</style>
