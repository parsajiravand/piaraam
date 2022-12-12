<template>
  <div class="container-fluid home admin">
    <div class="row pt-4 d-flex justify-content-between ">
      <div class="col-xl-4  col-sm-6 col-6  text-center ">
        <h1 class="text-nowrap">Admin Panel</h1>
      </div>
      <div class="col-3 text-white text-center">
        <font-awesome-icon
          :icon="['fas', 'sign-out-alt']"
          size="2x"
          class="signOut"
          @click="signoutHandler"
        />
        <h6>Sign out</h6>
      </div>
    </div>
    <div class="row pt-4 control">
      <div class="col-xl-4 col-lg-4 bg-dark ">
        <div
          class="nav flex-column nav-pills "
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <div
            class="nav flex-column nav-pills "
            id="v-pills-tab"
            role="tablist"
            aria-orientation="horizontal"
          >
            <a
              class="nav-link active p-4"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
              >Home</a
            >
            <a
              class="nav-link p-4 "
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
              >Manage Youtube</a
            >
            <a
              class="nav-link p-4"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              >Manage Soundcloud</a
            >
          </div>
        </div>
      </div>
      <div class=" bg-light col-xl-8 col-lg-8 ">
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <Home />
          </div>
          <div
            class="tab-pane fade "
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <Youtube />
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            <Soundcloud />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "../components/Admin/AdminHome.vue";
import Youtube from "../components/Admin/ManageYoutube.vue";
import Soundcloud from "../components/Admin/ManageSoundcloud.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { getAuth, signOut } from "firebase/auth";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faSignOutAlt);
export default {
  created() {
    setTimeout(() => {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.push("/login");
      });
    }, 1000 * 60 * 60);
  },
  methods: {
    signoutHandler() {
      const auth = getAuth();

      signOut(auth).then(() => {
        document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 UTC";
        this.$router.push("/login");
      });
    },
  },

  components: {
    Home,
    Youtube,
    Soundcloud,
  },
};
</script>

<style scoped lang="scss"></style>
