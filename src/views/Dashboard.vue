<template>
  <div>
    Dashboard 233
    <v-btn color="success">Success</v-btn>
    <pre>{{ serviceList }}</pre>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapState(["serviceList"])
  }
};
</script>

<style scoped></style>
