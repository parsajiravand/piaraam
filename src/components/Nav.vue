<template>
  <div id="p-nav">
    <div class="container-fluid">
      <div>
        <vue-scroll-progress-bar
          height=".3rem"
          backgroundColor="linear-gradient(to right, #000225, #ffffff)"
        />
      </div>
      <div class="row p-nav">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="col-lg-2 col-sm-2 col-2 hide-mobile">
            <router-link
              to="#"
              name="home"
              v-scroll-to="{ el: '#p-nav', duration: 1000 }"
            >
              <img
                src="../img/logo-white.png"
                alt="piaraam pedramjiravand logo composer"
                class="navbar-logo"
              />
            </router-link>
          </div>
          <div class="col-lg-10 col-sm-10 col-10 p-nav-ul">
            <div class="menu-btn">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarNav">
              <div class="col-lg-6">
                <ul class="navbar-nav text-center">
                  <li class="nav-item">
                    <router-link
                      to="#"
                      name="home"
                      v-scroll-to="{ el: '#p-nav', duration: 1000 }"
                      class="nav-link"
                      >Home</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      to="#"
                      name="about"
                      v-scroll-to="{ el: '#p-about', duration: 1000 }"
                      class="nav-link"
                      >About</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      to="#"
                      name="songs"
                      v-scroll-to="{ el: '#p-songs', duration: 1000 }"
                      class="nav-link"
                      >Video</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      to="#"
                      name="news"
                      v-scroll-to="{ el: '#p-soundcloud', duration: 1000 }"
                      class="nav-link"
                      >Songs</router-link
                    >
                  </li>
                </ul>
              </div>
              <div class="col-lg-6 col-sm-12 col-12" style="color:white">
                <ul class="navbar-nav justify-content-end p-nav-social">
                  <li class="nav-item">
                    <a
                      href="https://www.instagram.com/piaraam/?hl=en"
                      class="nav-link"
                      target="_blank"
                    >
                      <font-awesome-icon
                        :icon="['fab', 'instagram']"
                        size="2x"
                        class="instagram"
                      />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="https://t.me/piaraammusic"
                      class="nav-link"
                      target="_blank"
                    >
                      <font-awesome-icon
                        :icon="['fab', 'telegram']"
                        size="2x"
                        class="telegram"
                      />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="https://www.facebook.com/109902080559959?referrer=whatsapp"
                      class="nav-link"
                      target="_blank"
                    >
                      <font-awesome-icon
                        :icon="['fab', 'facebook']"
                        size="2x"
                        class="facebook"
                      />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="https://www.youtube.com/channel/UC4YQW0iWo9T43bpVZ5bq5Yg"
                      class="nav-link"
                      target="_blank"
                    >
                      <font-awesome-icon
                        :icon="['fab', 'youtube']"
                        size="2x"
                        class="youtube"
                      />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="https://soundcloud.com/pedram-jiravand"
                      class="nav-link"
                      target="_blank"
                    >
                      <font-awesome-icon
                        :icon="['fab', 'soundcloud']"
                        size="2x"
                        class="soundcloud"
                      />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="https://www.linkedin.com/in/pedram-jiravand-piaraam-37a912175"
                      class="nav-link"
                      target="_blank"
                    >
                      <font-awesome-icon
                        :icon="['fab', 'linkedin']"
                        size="2x"
                        class="linkedin"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>

  <!--    <router-view /> -->
</template>
<script>
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faInstagram,
  faTelegram,
  faFacebook,
  faYoutube,
  faSoundcloud,
  faLinkedin,
  faYahoo,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faInstagram,
  faTelegram,
  faFacebook,
  faYoutube,
  faSoundcloud,
  faLinkedin,
  faYahoo
);
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.p-nav li a {
  transition: 0.2s all ease-in-out;
}
</style>
