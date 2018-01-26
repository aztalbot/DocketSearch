<template>
  <div class='nav-flex'>
    <div class="flex-group">
      <router-link class="no-line" to="/">
        <h2 class="nav-title">{{ title }}</h2>
      </router-link>
      <typeahead class="search-input" :searched-text="initialSearch" :default-text="placeholder"/>
    </div>
    <menu-toggle class="menu"/>
  </div>
</template>

<script>
import TypeAhead from "../Components/TypeAhead.vue"
import MenuToggle from "../Components/MenuToggle.vue"

export default {
  name: 'NavSearch',
  data() {
    return {
      title: "Docket Search",
      placeholder: "Search"
    }
  },
  components: {
    'typeahead': TypeAhead,
    'menu-toggle': MenuToggle
  },
  props: ['initialSearch']
}
</script>

<style lang="sass" scoped>
  @import "../styles/_vars.sass"

  .nav-flex
    @extend %flex-row
    flex-wrap: nowrap
    justify-content: space-between
    width: 100%
    height: 55px
    margin-top: 0
    background: $light-panes-grey
  
  .menu
    margin-right: 25px
    margin-top: 4px
  
  .nav-title
    min-width: 175px
    padding-top: 15px
    padding-left: 7.5px
    font-family: $title-font
    font-size: $page-head
    font-weight: 900
    font-style: normal
    padding-right: 10px
    margin: 0
    color: $purple
    text-decoration: none
  
  .search-input
    align-self: flex-start
    padding-top: 5px
    margin-left: 0px
  
  .flex-group
    @extend %flex-row
    flex-wrap: nowrap
    justify-content: flex-start
    width: 80%
  
  .no-line
    text-decoration: none
  
</style>
