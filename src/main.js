import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
