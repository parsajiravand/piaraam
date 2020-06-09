<template>
  <div id="p-about">
    <div class="container">
      <div class="row justify-content-center">
        <div class="p-about-title text-center">
          <h2>About</h2>
          <hr
            style="max-width:50px;border-width:3px;border-color:white;margin:30px auto"
          />
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-6">
            <img
              src="../img/about1.jpg"
              alt="piaraam pedramjiravand profile composer iraniancomposer"
              class="img-fluid"
            />
          </div>
          <div class="col-lg-5 col-md-12">
            <p class="text">
              Pedram Jiravand, nicknamed Piaraam, is an Iranian composer and
              pianist. Born on April 23, 1994 in Abadan. As a child, I became
              acquainted with instrumental music. At the age of 15, I decided to
              pursue music professionally as a composer. At the age of 18, I
              entered the University of the Arts in Tehran to study composition.
              Then try to record different songs as well as record the music of
              different movies. And I currently live in Istanbul
            </p>
            <li>
              <font-awesome-icon icon="trophy" style="color:gold" />
              <span> live concert in Azadi Tower in Tehran 2017</span>
            </li>
            <li>
              <font-awesome-icon icon="trophy" style="color:gold" />
              Best music film in Kadoma film festival in Japan
            </li>
            <li>
              <font-awesome-icon icon="trophy" style="color:gold" />Fiance best
              music in one film one country in France 2019
            </li>
            <li>
              <font-awesome-icon icon="trophy" style="color:gold" /> Performed
              at the opening of Fajr International Film Festival in Tehran 2017
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
library.add(faTrophy);
export default {
  name: "about",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
