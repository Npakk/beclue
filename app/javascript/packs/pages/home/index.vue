<template>
  <v-app>
    <v-header></v-header>
  </v-app>
</template>

<script>
import header from "../../components/header"

export default {
  components: {
    "v-header": header
  },
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
