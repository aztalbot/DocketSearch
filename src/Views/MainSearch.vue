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

<style scoped>
  .search-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 30vh;
  }
  .search-container h2 {
    width: 100%;
    font-size: 36pt;
    padding: 0 0 5px 0;
    margin: 0;
    color: #4A148C;
  }
  .search-input {
    margin: 0 auto;
  }
  .menu {
    top: 25px;
    right: 50px;
    position: absolute;
  }
</style>
