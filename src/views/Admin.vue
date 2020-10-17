<template>
  <div>
    <div v-if="adminAuth == 'test@test.com'">
      <AdminNav />
    </div>
    <div v-else>
      <div class="text-center">
        <h2 class="text-danger m-5">Access Denied</h2>
      </div>
    </div>
  </div>
</template>
<script>
import AdminNav from "../components/admin/AdminNav";
export default {
  data() {
    return {
      adminAuth: "",
    };
  },
  methods: {
    fetchData() {
      this.adminAuth = localStorage.getItem("admin");
      console.log(this.adminAuth);
    },
  },
  created() {
    this.fetchData();
  },
  mounted() {
    setTimeout(() => {
      if (this.adminAuth == null) {
        this.$router.push({ name: "/Login" });
      }
    }, 1000);
  },
  components: {
    AdminNav,
  },
};
</script>
