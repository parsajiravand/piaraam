<template>
  <div class="cointainer-fluid ">
    <div class="row">
      <div class="col-12 col-xl-8 mx-auto">
        <h1 class="text-dark mt-5 font-weight-bold text-center">
          Manage Youtube Videos
        </h1>
        <form @submit.prevent="uploadHandler">
          <div
            class="form-group mt-5"
            :class="{ error: v$.youtubeTitle.$errors.length }"
          >
            <label for="title" class="font-weight-bold"> Youtube Title:</label>
            <input
              id="title"
              type="text"
              class="form-control "
              placeholder="Enter the Video title here..."
              v-model="youtubeTitle"
              @blur="v$.youtubeTitle.$touch"
            />
            <p
              class="m-0 text-danger font-weight-bold small"
              v-for="error of v$.youtubeTitle.$errors"
              :key="error.$uid"
            >
              ({{ error.$message }})
            </p>
          </div>
          <div
            class="form-group"
            :class="{ error: v$.youtubeLink.$errors.length }"
          >
            <label for="link" class="font-weight-bold"> Youtube Link:</label>
            <input
              id="link"
              type="text"
              class="form-control "
              placeholder="Enter the Video URL here..."
              v-model="youtubeLink"
              @blur="v$.youtubeLink.$touch"
            />
            <p
              class="m-0 text-danger font-weight-bold small "
              v-for="error of v$.youtubeLink.$errors"
              :key="error.$uid"
            >
              ({{ error.$message }})
            </p>
          </div>
          <div class="text-center">
            <button
              class="btn btn-dark m-4 "
              type="submit"
              :disabled="loading || error"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-8 mx-auto text-center">
        <b-spinner
          v-if="!error && loading"
          type="grow"
          style="width: 3rem; height: 3rem;"
        ></b-spinner>
        <p v-if="error" class="text-danger font-weight-bold">{{ errorMsg }}</p>
        <div class="col-12 mx-auto">
          <h3 class="text-dark text-center font-weight-bold">
            {{ youtubeGetTitle }}
          </h3>
          <iframe
            :src="this.youtubeGetLink"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            style="width:300px;height:300px;"
            class="p-youtube m-auto d-block"
            alt="youtube Video"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase/init";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      youtubeLink: "",
      youtubeTitle: "",
      youtubeGetTitle: "",
      youtubeGetLink: "",
      youtubeId: "",
      youtube: [],
      loading: true,
      error: false,
      errorMsg: "",
    };
  },
  created() {
    this.fetchYoutube();
  },

  validations() {
    const URL_REGEX = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
    const ValidUrl = helpers.regex(URL_REGEX);

    return {
      youtubeTitle: {
        required: helpers.withMessage("This field cannot be empty", required),
        $lazy: true,
      },
      youtubeLink: {
        required: helpers.withMessage("This field cannot be empty", required),
        $lazy: true,
        ValidUrl: helpers.withMessage(
          "please Enter a valid youtube Link",
          ValidUrl
        ),
      },
    };
  },
  methods: {
    async generateYoutubeLink() {
      this.loading = true;
      this.error = false;
      const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      let findYoutubeLink = "";
      const youtubeId = this.youtubeLink.match(regExp);
      if (youtubeId && youtubeId[2].length == 11) {
        findYoutubeLink = youtubeId[2];
      } else {
        console.log("url error", youtubeId);

        //error
      }
      this.youtubeLink = `https://www.youtube.com/embed/${findYoutubeLink}`;
    },
    async uploadHandler() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        this.error = true;
        this.errorMsg = "please fill all the fields correctly";
        return;
      } else {
        await this.generateYoutubeLink();
        const youtubeDoc = doc(db, "youtube", this.youtubeId);
        await updateDoc(youtubeDoc, {
          link: this.youtubeLink,
          title: this.youtubeTitle,
        }).then((res) => {
          this.loading = false;
        });
      }
      this.fetchYoutube();
    },
    async fetchYoutube() {
      this.loading = true;
      const querySnapshot = await getDocs(collection(db, "youtube"));
      if (querySnapshot.empty) {
        this.errorMsg =
          "You dont have permission to reach the Url or your database is empty";
        this.error = true;
      } else {
        querySnapshot.forEach((doc) => {
          let youtube = doc.data();
          this.youtubeId = doc.id;
          this.youtubeGetTitle = youtube.title;
          this.youtube.push(youtube);
          this.youtubeGetLink = youtube.link;
          this.loading = false;
        });
      }
    },
  },
};
</script>

<style lang="sass" scoped></style>
