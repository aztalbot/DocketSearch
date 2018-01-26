<template>
  <div class='doc-flex'>
    <h5 class="title doc-description">{{ description }}</h5>
    <h6 class="title doc-party"><em>{{ party }}</em></h6>
    <div class="date">Filed: {{ date }}</div>
  </div>
</template>

<script>

export default {
  name: 'Documents',
  props: ['doc'],
  computed: {
    date: function() {
      let full_date = this.doc.Date_Filed.slice(0, 10);
      let year = full_date.slice(0, 4);
      let month = full_date.slice(5, 7);
      let day = full_date.slice(8);
      return [month, day, year].join('/');
    },
    party: function() {
      return this.doc.Document_Name.slice(0, this.doc.Document_Name.indexOf(' - '));
    },
    description: function() {
      return this.doc.Document_Name.slice(this.doc.Document_Name.indexOf(' - ') + 3);
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "../styles/_vars.sass"

  .doc-flex
    @extend %flex-col
    @extend %full-wdth-hght
    @extend %rounded
    margin-top: 5px
    margin-bottom: 10px
    text-align: left
    padding: 15px 15px 15px 15px
    box-shadow: $resting-shadow
    +transition(all, 0.15s, ease)
  
  .doc-flex:hover
    transform: scale(1.005)
    box-shadow: $active-shadow
  
  .title
    padding-top: 2.5px
    padding-bottom: 2.5px
    margin: 0;
  
  .doc-description
    font-size: $item-title
    color: $purple

  .doc-party
    font-size: $item-text
    padding-bottom: 5px

  .date
    font-size: $item-text
</style>
