<template>
  <div>
    <nav-search :initial-search="keywords" class="nav-bar"/>
  </div>
</template>

<script>
import NavSearch from "../Components/NavSearch.vue"

export default {
  name: 'SearchResults',
  data() {
    return {
      title: "Docket Search - Results",
      keywords: this.$route.query.keywords
    }
  },
  components: {
    'nav-search': NavSearch
  }
}
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 0;
  }
  .nav-bar {
    box-shadow: 0px 0.5px 2px 0.5px rgb(85, 85, 85)
  }
</style>
