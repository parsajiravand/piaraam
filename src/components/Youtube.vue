<template>
  <div id="p-songs">
    <div class="alert alert-primary" role="alert">
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <h5 class="alert-heading text-center">فیلتر شکن(VPN)شما خاموش است</h5>
      <p class="text-center">
        برای نمایش لینک های Yotube , SoundCloud باید از (VPN) استفاده کنید<br />
        <strong>و دوباره رفرش کنید.</strong>
      </p>
      <div class="close-understand text-center">
        <button
          type="button"
          class="close btn btn-secondary"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true" class="text-center">متوجه شدم</span>
        </button>
      </div>
    </div>
    <h2 class="text-center">Featured Video</h2>
    <!-- Add Alert For Iran for Using Services -->
    <div class="p-error d-none">
      <h5 class=" text-center">فیلتر شکن(VPN)شما خاموش است</h5>
      <p class="text-center">
        برای نمایش لینک های Yotube , SoundCloud باید از (VPN) استفاده کنید<br />
        <strong>و دوباره رفرش کنید.</strong>
      </p>
    </div>

    <div
      id="p-youtube"
      class="container p-songs justify-content-center"
      v-for="you in youtube"
      :key="you.id"
    >
      <div class="p-youtube-title text-center">
        <h5>{{ you.title }}</h5>
        <hr
          style="max-width:50px;border-width:3px;border-color:#ff0000;margin:30px auto"
        />
      </div>
      <iframe
        :src="you.link"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="p-youtube"
        alt="piaraam video pedramjiravand youtube composer moving iranian_composer"
      ></iframe>
    </div>
  </div>
</template>
<script>
import db from "@/firebase/init.js";
export default {
  data() {
    return {
      youtube: [],
    };
  },
  beforeCreate() {
    //fetch data from fire store
    db.collection("youtube")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let youtube = doc.data();
          youtube.id = doc.id;
          this.youtube.push(youtube);
        });
      })
      .catch((err) => console.log(err));
  },
  created() {
    //after Get API if Have Error We show alert for iran
    setTimeout(() => {
      let youtubeRes = document.getElementById("p-youtube");
      if (youtubeRes === null) {
        //add JQuery  For Alert
        document.querySelector(".alert").style.visibility = "visible";
        document.querySelector(".alert").classList.add("fixed-top");
        document.querySelector(".p-error").classList.remove("d-none");
      } else {
        //Connectin To FireStore Is True
        document.querySelector(".alert").style.visibility = "hidden";
      }
    }, 5000);
  },
};
</script>
