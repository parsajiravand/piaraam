<template>
  <div class="container-fluid mt-5 position-relative  ">
    <div class="card border rounded shadow  ">
      <div v-html="sounds" class=" base-card"></div>

      <button class="delete-btn" @click="deleteSong(id)">
        <font-awesome-icon
          class="text-light trash"
          :icon="['fas', 'trash-alt']"
        />
      </button>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faTrashAlt);
export default {
  props: ["sounds", "id"],
  inject: ["deleteSong"],
};
</script>

<style lang="scss" scoped></style>
