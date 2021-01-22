<template>
  <div id="p-soundcloud">
    <div class="p-soundcloud-text text-center">
      <h2>Songs List</h2>
      <hr
        style="max-width:50px;border-width:3px;border-color:#cc4400;margin:30px auto"
      />
    </div>
    <div class="p-soundcloud container">
      <carousel
        :responsive="{ 0: { items: 1 }, 720: { items: 2 }, 1200: { items: 3 } }"
        :autoplay="true"
        :autoplay-speed="8000"
        :autoplay-timeout="8000"
        :margin="15"
        :nav="false"
        ><span v-for="sound in soundcloud[0].songs" :key="sound.id">
          <iframe
            width="100%"
            height="400px"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            :src="sound"
            alt="piaraam"
          ></iframe>
        </span>
      </carousel>
    </div>
  </div>
</template>
<script>
import db from "@/firebase/init.js";

import carousel from "vue-owl-carousel";
export default {
  data() {
    return {
      soundcloud: [],
    };
  },
  created() {
    //fetch data from fire store
    db.collection("soundcloud")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let soundcloud = doc.data();
          soundcloud.id = doc.id;
          this.soundcloud.push(soundcloud);
        });
      });
  },
  components: { carousel },
};
</script>
<style lang=""></style>
