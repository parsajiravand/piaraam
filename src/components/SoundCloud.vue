<template>
  <div id="p-soundcloud">
    <div class="p-soundcloud-text text-center">
      <h2>Songs List</h2>
      <hr
        style="max-width:50px;border-width:3px;border-color:#cc4400;margin:30px auto"
      />
    </div>
    <div
      class="p-soundcloud container"
      v-for="sound in soundcloud"
      :key="sound.id"
    >
      <carousel
        :responsive="{ 0: { items: 1 }, 720: { items: 2 }, 1200: { items: 3 } }"
        :autoplay="true"
        :margin="15"
        :nav="false"
      >
        <iframe
          width="100%"
          height="400px"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          :src="sound.link1"
        ></iframe>
        <iframe
          width="100%"
          height="400px"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          :src="sound.link2"
        ></iframe>
        <iframe
          width="100%"
          height="400px"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          :src="sound.link3"
        ></iframe>
        <iframe
          width="100%"
          height="400px"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          :src="sound.link4"
        ></iframe>
        <iframe
          width="100%"
          height="400px"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          :src="sound.link5"
        ></iframe>
        <iframe
          width="100%"
          height="400px"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          :src="sound.link6"
        ></iframe>
        <iframe
          width="100%"
          height="400px"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          :src="sound.link7"
        ></iframe>
        <iframe
          width="100%"
          height="400px"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          :src="sound.link8"
        ></iframe>
        <iframe
          width="100%"
          height="400px"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          :src="sound.link9"
        ></iframe>
        <iframe
          width="100%"
          height="400px"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          :src="sound.link10"
        ></iframe>
        <!--       <iframe
          width="100%"
          height="400px"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          :src="sound.link"
        ></iframe> -->
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
      soundcloud: []
    };
  },
  created() {
    //fetch data from fire store
    db.collection("soundcloud")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.data().mozik1, doc.id);
          let soundcloud = doc.data();
          soundcloud.id = doc.id;
          this.soundcloud.push(soundcloud);
        });
      });
  },
  components: { carousel }
};
</script>
<style lang=""></style>
