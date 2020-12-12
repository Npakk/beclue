import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue'
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
import "@mdi/font/css/materialdesignicons.css"
import Index from './index.vue'

Vue.use(TurbolinksAdapter)
Vue.use(Vuetify)
const vuetify = new Vuetify()

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    vuetify,
    el: '[data-vue]',
    components: {
      Index
    },
    render: h => h(Index)
  })
})
