<template>
  <div class='doc-flex'>
    <h5 class="title doc-description">{{ doc.Document_Name.slice(doc.Document_Name.indexOf(' - ') + 3) }}</h5>
    <h6 class="title doc-party"><em>{{ doc.Document_Name.slice(0, doc.Document_Name.indexOf(' - ')) }}</em></h6>
  </div>
</template>

<script>

export default {
  name: 'Documents',
  data() {
    return {}
  },
  props: ['doc']
}
</script>

<style lang="sass" scoped>
  @import "../styles/_vars.sass"

  .doc-flex
    @extend %flex-col
    width: 100%
    height: 55px
    margin-top: 5px
    margin-bottom: 10px
    text-align: left
    padding-left: 5px
    padding-right: 5px
  
  .title
    padding-top: 2.5px;
    padding-bottom: 2.5px;
    margin: 0;
</style>
