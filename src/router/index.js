import Vue from 'vue'
import VueRouter from 'vue-router'
import MainSearch from '../Views/MainSearch.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'MainSearch',
      component: MainSearch
    }
  ]
})
