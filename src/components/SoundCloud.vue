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
        :margin="15"
        :nav="false"
      >
        <img src="https://placeimg.com/200/200/any?1" />

        <img src="https://placeimg.com/200/200/any?2" />
        <iframe
          width="100%"
          height="400px"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A//api.soundcloud.com/tracks/704525203&amp;show_artwork=false&amp;maxwidth=1200&amp;maxheight=1000&amp;dnt=1&amp;auto_play=false&amp;buying=false&amp;liking=true&amp;download=false&amp;sharing=true&amp;show_comments=true&amp;show_playcount=false&amp;show_user=false&amp;color=54595"
        ></iframe>
        <iframe
          width="100%"
          height="400px"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A//api.soundcloud.com/tracks/259022682&amp;show_artwork=false&amp;maxwidth=1200&amp;maxheight=1000&amp;dnt=1&amp;auto_play=false&amp;buying=false&amp;liking=true&amp;download=false&amp;sharing=true&amp;show_comments=true&amp;show_playcount=false&amp;show_user=false&amp;color=54595"
        ></iframe>
        <iframe
          width="100%"
          height="400px"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A//api.soundcloud.com/tracks/259022682&amp;show_artwork=false&amp;maxwidth=1200&amp;maxheight=1000&amp;dnt=1&amp;auto_play=false&amp;buying=false&amp;liking=true&amp;download=false&amp;sharing=true&amp;show_comments=true&amp;show_playcount=false&amp;show_user=false&amp;color=54595"
        ></iframe>
        <iframe
          width="100%"
          height="400px"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A//api.soundcloud.com/tracks/259022682&amp;show_artwork=false&amp;maxwidth=1200&amp;maxheight=1000&amp;dnt=1&amp;auto_play=false&amp;buying=false&amp;liking=true&amp;download=false&amp;sharing=true&amp;show_comments=true&amp;show_playcount=false&amp;show_user=false&amp;color=54595"
        ></iframe>
      </carousel>
    </div>
  </div>
</template>
<script>
import carousel from "vue-owl-carousel";
export default {
  data() {
    return {
      api: { enchantment: 704525203 }
    };
  },
  components: { carousel }
};
</script>
<style lang=""></style>
