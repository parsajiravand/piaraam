<template>
  <div id="p-songs">
    <div
      class="container p-songs justify-content-center"
      v-for="you in youtube"
      :key="you.id"
    >
      <div class="p-youtube-title text-center">
        <h2>Featured Video</h2>
        <h5>{{ you.title }}</h5>
      </div>
      <iframe
        :src="you.link"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="p-youtube"
      ></iframe>
    </div>
  </div>
</template>
<script>
import db from "@/firebase/init.js";
export default {
  data() {
    return {
      youtube: []
    };
  },
  created() {
    //fetch data from fire store
    db.collection("youtube")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.data(), doc.id);
          let youtube = doc.data();
          youtube.id = doc.id;
          this.youtube.push(youtube);
        });
      });
  }
};
</script>
