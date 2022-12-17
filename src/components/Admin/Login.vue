<template>
  <div class="container-fluid login home ">
    <div class="row ">
      <div
        class="col-xl-5 col-md-8 col-sm-12 text-center text-white border rounded p-4"
        style="margin:20vh auto;box-shadow: 1px 1px 9px 1px;"
      >
        <h1>Piaraam Admin</h1>
        <form @submit.prevent="submitForm">
          <div class="container p-4">
            <div
              class="form-group row p-2"
              :class="{ error: v$.email.$errors.length }"
            >
              <label for="email" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input
                  id="email"
                  @blur="v$.email.$touch"
                  placeholder="email"
                  v-model.trim="email"
                  class="form-control"
                />
                <p
                  class="m-0  font-weight-bold small "
                  v-for="error of v$.email.$errors"
                  :key="error.$uid"
                >
                  ({{ error.$message }})
                </p>
              </div>
            </div>
            <div
              class="form-group row p-2"
              :class="{ error: v$.password.$errors.length }"
            >
              <label for="password" class="col-sm-2 col-form-label "
                >Password</label
              >
              <div class="col-sm-10">
                <input
                  id="password"
                  placeholder="password"
                  v-model.trim="password"
                  @blur="v$.password.$touch"
                  class="form-control"
                />
                <p
                  class="m-0  font-weight-bold small "
                  v-for="error of v$.password.$errors"
                  :key="error.$uid"
                >
                  ({{ error.$message }})
                </p>
              </div>
            </div>
          </div>
          <div class="col-6 m-auto pb-4 ">
            <button
              class="btn  btn-outline-light  btn-block font-weight-bold"
              type="submit"
              :disabled="loading"
              v-if="!loading"
            >
              Login
            </button>
            <b-progress
              :value="value"
              variant="dark"
              animated
              height="2rem"
              v-else
            ></b-progress>
          </div>

          <p v-if="err" style="color: red">{{ errMsg }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  helpers,
  minLength,
  numeric,
} from "@vuelidate/validators";
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      err: false,
      errMsg: "",
      value: 0,
    };
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage("This field cannot be empty", required),
        email,
        $lazy: true,
      },
      password: {
        required: helpers.withMessage("This field cannot be empty", required),
        $lazy: true,
        minLength: minLength(6),
        numeric,
      },
    };
  },
  methods: {
    setCookie(userId, IdValue, exhours) {
      const d = new Date();
      d.setTime(d.getTime() + exhours * 3600 * 1000);
      let expires = "expires=" + d.toUTCString();
    },
    async submitForm() {
      const auth = getAuth();
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        this.err = true;
        this.errMsg = "please fill the empty fields";
        return;
      } else {
        this.err = false;
        this.loading = true;
        await signInWithEmailAndPassword(auth, this.email, this.password)
          .then((data) => {
            this.loading = false;
            const id = data.user.uid;
            if (id) {
              this.setCookie("token", id, 1);
              this.$router.push("/admin");
            }
          })
          .catch((err) => {
            this.err = true;
            this.loading = false;
            this.errMsg = err.message;
          });
        this.value = 100;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.login {
  height: 100%;
  position: fixed;
}
</style>
