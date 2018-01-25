<template>
  <div>
    <menu-toggle class="menu"/>
    <div class="search-container">
      <h2>{{ title }}</h2>
    <typeahead class="search-input" :default-text="placeholder"/>
    </div>
  </div>
</template>

<script>
import TypeAhead from "../Components/TypeAhead.vue"
import MenuToggle from "../Components/MenuToggle.vue"

export default {
  name: 'MainSearch',
  data() {
    return {
      title: "Docket Search",
      placeholder: "Search"
    }
  },
  components: {
    'typeahead': TypeAhead,
    'menu-toggle': MenuToggle
  }
}
</script>

<style lang="sass" scoped>
  @import "../styles/_vars.sass"

  .search-container
    @extend %full-wdth-hght
    @extend %flex-col
    margin-top: 30vh
  
  .search-container h2
    font-size: $page-title
    color: $purple
    width: 100%
    padding: 0 0 5px 0
    margin: 0
  
  .search-input
    margin: 0 auto
  
  .menu
    +abs-pos(25, 50)
  
</style>
