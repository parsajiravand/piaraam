<template>
  <div id="p-nav">
    <div class="container-fluid">
      <div class="row">
        <ul class="p-nav nav center">
          <b-nav-item to="/home" name="home">Home</b-nav-item>
          <b-nav-item to="/about#p-about" name="about">About</b-nav-item>
          <b-nav-item to="/songs#p-songs" name="songs">Songs</b-nav-item>
          <b-nav-item to="/News">News</b-nav-item>
        </ul>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
</style>