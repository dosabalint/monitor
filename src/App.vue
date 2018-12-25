<template>
  <v-app> <router-view /> </v-app>
</template>

<script>
export default {};
</script>

<style lang="stylus">
/* vuetify */
@import '~vuetify/src/stylus/settings/_variables'
$material-light.background = #FFF
@import '~vuetify/src/stylus/components/_app.styl'

/* app */
body
  margin 0
</style>
