import Vue from 'vue'
import VueRouter from 'vue-router'
import MainSearch from '../Views/MainSearch.vue'
import SearchResults from '../Views/SearchResults.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/search',
      name: 'search',
      component: MainSearch
    },
    {
      path: '/',
      redirect: 'search'
    },
    {
      path: '/results',
      name: 'results',
      component: SearchResults
    }
  ]
})
