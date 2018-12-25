<template>
  <v-toolbar dark color="primary">
    <v-toolbar-title class="white--text">Monitor</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click="demoAdd"> <v-icon>add</v-icon> </v-btn>
    <v-btn icon> <v-icon>search</v-icon> </v-btn>
    <v-btn icon> <v-icon>refresh</v-icon> </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "app-toolbar",
  methods: {
    demoAdd() {
      this.$store.dispatch("addService", { name: "demo service" });
    }
  }
};
</script>
