import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import data from "./data/GetDocumentsMock.json"

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    searchPath: 'results?keywords='
  },
  methods: {
    runSearch: function(e) {
      let base = this.searchPath;
      let routeObj = { path: base + e };
      this.$router.push(routeObj)
    },
    getData: function(e) {
      return data;
      // axios.get('/' + e)
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    }
  }
})
