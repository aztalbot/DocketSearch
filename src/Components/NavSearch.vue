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

<style scoped>
  .nav-flex {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
    height: 55px;
    margin-top: 0;
    background: #ECEFF1
  }
  .menu {
    margin-right: 25px;
    margin-top: 4px;
  }
  .nav-title {
    min-width: 175px;
    padding-top: 15px;
    padding-left: 7.5px;
    font-size: 16pt;
    padding-right: 10px;
    margin: 0;
    color: #4A148C;
    text-decoration: none;
  }
  .search-input {
    align-self: flex-start;
    padding-top: 5px;
    margin-left: 0px;
  }
  .flex-group {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 80%;
  }
  .no-line {
    text-decoration: none;
  }
</style>
