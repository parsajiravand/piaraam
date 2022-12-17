<template>
  <div class="container-fluid">
    <div class="row mt-5 ">
      <div class="col-12 text-center">
        <h1 class=" text-dark mt-5 font-weight-bold">
          Welcome to Piaraam's admin Dashboard!
        </h1>
        <button
          class="btn btn-dark btn-lg text-center mt-5"
          @click="viewSiteHandler"
        >
          View the Site
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    viewSiteHandler() {
      let route = this.$router.resolve({ path: "/" });
      window.open(route.href);
    },
  },
};
</script>

<style lang="sass" scoped></style>
