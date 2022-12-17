<template>
  <div class="cointainer-fluid ">
    <div class="row">
      <div class="col-12 col-xl-8 mx-auto">
        <h1 class="text-dark mt-5 font-weight-bold text-center">
          Manage Soundcloud Songs
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-xl-8 mx-auto mt-5 mb-5">
        <div class="card-deck text-center ">
          <div
            class="card rounded shadow"
            style="border:2px dashed rgb(216, 216, 216)"
            @click="newSongHandler"
          >
            <div class="card-body ">
              <h3 class="text-dark font-weight-bold" v-if="!showNewSongInput">
                <font-awesome-icon class="mr-4" :icon="['fas', 'music']" />Click
                here for add new song
              </h3>
              <form @submit.prevent="uploadSongs" v-else>
                <div class="form-group mt-5" :class="{ error: soundCloundError }">
                  <label for="link" class="font-weight-bold">
                    Soundcloud Link</label
                  >
                  <input
                    id="link"
                    type="text"
                    class="form-control "
                    placeholder="Enter the Song Url here..."
                    v-model="soundcloudUpLink"
                    @blur="v$.soundcloudUpLink.$touch"
                  />
                  <p
                    class="m-0 text-danger font-weight-bold small "
                    v-for="error of v$.soundcloudUpLink.$errors"
                    :key="error.$uid"
                  >
                    ({{ error.$message }})
                  </p>
                </div>
                <div class="text-center">
                  <button
                    class="btn btn-dark m-4"
                    type="submit"
                    :disabled="upLoading"
                  >
                    Add New song
                  </button>
                </div>
                <div>
                  <b-spinner
                    style="width: 3rem; height: 3rem;"
                    v-if="upLoading"
                  ></b-spinner>
                  <p v-else-if="upError" class="text-danger font-weight-bold">
                    {{ errorMsg }}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-8 mx-auto mt-5 mb-5 text-center">
          <b-spinner
            v-if="!getError && getLoading"
            type="grow"
            style="width: 3rem; height: 3rem;"
          ></b-spinner>
          <p v-if="getError" class="text-danger font-weight-bold">
            {{ errorMsg }}
          </p>

          <baseCart
            v-for="songs in soundDataArray"
            :key="songs.id"
            :id="songs.id"
            :sounds="songs.link"
          ></baseCart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase/init";
import baseCart from "./layout/base-soundcloud-cart.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { faMusic, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faMusic, faTrashAlt);
export default {
  components: { baseCart },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      soundcloudUpLink: "",
      getLoading: true,
      upLoading: false,
      upError: false,
      getError: false,
      errorMsg: "",
      showNewSongInput: false,
      soundDataArray: [],
    };
  },
  created() {
    this.fetchSoundcloud();
  },
  computed: {
    soundCloundError() {
      return this.v$.soundcloudUpLink.$errors.length;
    },
  },
  provide() {
    return {
      deleteSong: this.deleteSongs,
    };
  },
  validations() {
    const URL_REGEX = /((https:\/\/)|(http:\/\/)|(www.)|(m\.)|(\s))+(soundcloud.com\/)+[a-zA-Z0-9\-\.]+(\/)+[a-zA-Z0-9\-\.]+/;
    const ValidUrl = helpers.regex(URL_REGEX);
    return {
      soundcloudUpLink: {
        required: helpers.withMessage("This field cannot be empty", required),
        $lazy: true,
        ValidUrl: helpers.withMessage(
          "please Enter a valid soundcloud Link",
          ValidUrl
        ),
      },
    };
  },
  methods: {
    async uploadSongs() {
      this.getError = false;
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        this.upError = true;
        this.errorMsg = "please fill all the fields correctly";
        return;
      } else {
        this.soundDataArray = [];

        this.upLoading = true;
        const docRef = await addDoc(collection(db, "soundcloud"), {
          song: this.soundcloudUpLink,
        });
        this.upLoading = false;
        this.fetchSoundcloud();
        this.soundcloudUpLink = ''
        this.v$.soundcloudUpLink.$touch = false
      }
    },

    async fetchSoundcloud() {
      const querySnapshot = await getDocs(collection(db, "soundcloud"));
      if (querySnapshot.empty) {
        this.getLoading = false;
        this.errorMsg =
          "You dont have permission to reach the Url or your database is empty";
        this.getError = true;
      } else {
        querySnapshot.forEach((doc) => {
          let soundcloud = doc.data();
          soundcloud.id = doc.id;
          this.soundId = doc.id;
          this.getUrl(soundcloud.song, soundcloud.id);
          this.getLoading = false;
        });
      }
    },

    getUrl(song, id) {
      var formData = new FormData();
      formData.append("format", "json");
      formData.append("url", song);
      fetch("http://soundcloud.com/oembed", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          this.soundDataArray.push({ link: data.html, id: id });
        });
    },
    async deleteSongs(id) {
      const permission = confirm("are you sure you want to delete the song?");
      if (permission) {
        this.getLoading = true;

        this.soundDataArray = [];
        await deleteDoc(doc(db, "soundcloud", id));

        this.fetchSoundcloud();
      } else {
        return;
      }
    },
    newSongHandler() {
      this.showNewSongInput = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
