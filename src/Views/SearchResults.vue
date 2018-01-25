<template>
  <div class="page">
    <nav-search :initial-search="keywords" class="nav-bar"/>
    <div class="sub-page-main">
      <div class="results-col">
        <document-card v-for="doc in this.docsInView" :key="doc.id" :doc="doc" class="document-card"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavSearch from "../Components/NavSearch.vue"
import Documents from "../Components/Documents.vue"

export default {
  name: 'SearchResults',
  data() {
    return {
      title: "Docket Search - Results",
      keywords: this.$route.query.keywords,
      docs: [],
      docsInView: [],
      numDocsToRender: 25
    }
  },
  components: {
    'nav-search': NavSearch,
    'document-card': Documents
  },
  mounted() {
    this.docs = this.$root.getData(this.keywords)
    if(this.docs.length > this.numDocsToRender)
      this.docsInView = this.docs.slice(0, this.numDocsToRender)
    else
      this.docsInView = this.docs
  }
}
</script>

<style lang="sass" scoped>
  @import "../styles/_vars.sass"

  .page
    @extend %flex-col
    @extend %full-wdth-hght
    margin-top: 0

  .sub-page-main
    margin-top: 50px
    padding-top: 10px

  .nav-bar
    box-shadow: $resting-shadow
    position: fixed

  .results-col
    @extend %flex-col
    width: 80%
    padding-left: 15px
    padding-right: 5px
    padding-top: 10px

</style>
