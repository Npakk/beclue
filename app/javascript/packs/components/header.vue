<template>
  <v-app>
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
    >
      <v-toolbar-title>beclue</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        text
        color="primary"
        href="/users/sign_in"
      >
      Log in
      </v-btn>
      <v-btn
        text
        color="primary"
        href="/users/sign_up"
      >
      Sign up
      </v-btn>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      number: 12
    }
  },
};
</script>

<style>
</style>
