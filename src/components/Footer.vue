<template>
  <div id="p-footer">
    <div class="p-footer text-center">
      <div class="container-fluid">
        <h2>Let's Get In Touch!</h2>
        <hr
          style="max-width:50px;border-width:3px;border-color:white;margin:30px auto"
        />
        <div class="col-12 justify-content-center" style="color:white">
          <ul class="navbar-nav p-nav-social">
            <li class="nav-item">
              <a
                href="https://www.instagram.com/piaraam/?hl=en"
                class="nav-link"
              >
                <font-awesome-icon
                  :icon="['fab', 'instagram']"
                  size="2x"
                  class="instagram"
                />
              </a>
            </li>
            <li class="nav-item">
              <a href="https://t.me/piaraammusic" class="nav-link">
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
              >
                <font-awesome-icon
                  :icon="['fab', 'youtube']"
                  size="2x"
                  class="youtube"
                />
              </a>
            </li>
            <li class="nav-item">
              <a href="https://soundcloud.com/pedram-jiravand" class="nav-link">
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
        <div class="row p-gmail justify-content-center" style="color:white">
          <a href="https://pedramjiravand@gmail.com" class="nav-link">
            <font-awesome-icon icon="envelope" size="3x" />
            <strong style="margin:-10px"> PedramJiravand@Gmail.com</strong>
          </a>
        </div>
        <div class="row p-copyright justify-content-center">
          <hr style="border-width:1px;border-color:white;max-width:100px" />
          <h6>
            © PIARAAM 2020 | Created By

            <a href="https://www.instagram.com/parsablk/?hl=en">
              <font-awesome-icon
                :icon="['fab', 'instagram']"
                class="instagram"
              />
              ParsaJiravand</a
            >
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope);
export default {};
</script>
