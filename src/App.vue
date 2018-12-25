<template>
  <div id="app">
    <v-app>
      <app-toolbar />

      <v-container> <router-view /> </v-container>
    </v-app>
  </div>
</template>

<script>
import AppToolbar from "@/components/AppToolbar";

export default {
  components: { AppToolbar }
};
</script>

<style lang="stylus">
/* vuetify */
@import '~vuetify/src/stylus/settings/_variables';
@import '~vuetify/src/stylus/main.styl'

/* app */
body
  margin 0
</style>
