<template>
  
  <div id="p-soundcloud">
    <div class="p-soundcloud-text text-center test">
      <h2 >Songs List</h2>
      <hr
        style="max-width:50px;border-width:3px;border-color:#cc4400;margin:30px auto"
      />
    </div>
   
    <div class="container" v-if="!error" >
      <carousel-3d
      ref="treeExplorer"
        :controls-visible="true"
        :controls-prev-html="'&#10092; '"
        :controls-next-html="'&#10093;'"
        :controls-width="30"
        :controls-height="60"
        :clickable="false"
        :count="soundcloud.length"
      >
        <slide v-for="(sound, i) in soundcloud" :index="i" :key="sound.id" class="slides">
          <div v-html="sound.link"></div>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>
<script>
import { db } from "../firebase/init";
import { collection, getDocs } from "firebase/firestore";
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  data() {
    return {
      soundcloud: [],
      error:false,
    };
  },
  created() {
    //fetch data from fire store
   this.fetchSoundcloud()
  },
  updated(){
    this.$refs.treeExplorer.goSlide(this.$refs.treeExplorer.currentIndex)
  },
  methods:{
    async fetchSoundcloud() {

const querySnapshot = await getDocs(collection(db, "soundcloud"))

if (querySnapshot.empty) {
  this.getLoading=false
  this.errorMsg = "something went wrong!please try again";
  this.getError = true;
  } else {
    this.getLoading=false
    querySnapshot.forEach((doc) => {
      let soundcloud = doc.data();
 
      soundcloud.id = doc.id;
    
     this.getUrl(soundcloud.song,soundcloud.id)
    });
  }


},

getUrl(song,id) {

  var formData = new FormData();
  formData.append("format", "json");
  formData.append("url",song);
  fetch("http://soundcloud.com/oembed", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      this.soundcloud.push({ link: data.html, id: id });
    });


},
  },
  components: { Carousel3d, Slide }
};
</script>
<style lang="css">


</style>
