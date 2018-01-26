<template>
  <div class="inputContainer">
    <input
      type="text" name="search-input" v-model="search" :placeholder="defaultText" :class="hasDropDown()"
      @keydown.up.prevent="up()" @keydown.enter.prevent="select()"
      @keydown.down.prevent="down()" @keydown.esc="escapeTypeAhead()"
      @blur="escapeTypeAhead()" ref="typeaheadInput" autofocus>
    <div class="menuContainer" v-if="results.length > 0"
      @mouseover="typeAheadFocus(true)" @mouseout="typeAheadFocus(false)">
      <ul>
        <li @click="select()" v-for="(result, i) in results" :class="isActive(i)" :key="result.id"
          @mouseover="setActive(i)" @mouseout="setActive(-1)">
          <span>{{existingTerms}} {{result.slice(0, currentTerm.length)}}</span><strong>{{result.slice(currentTerm.length)}}</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  var mostUsed = require('../data/typeAheadData.js');

  export default {
    name: 'TypeAhead',
    data() {
      return {
        results: [],
        currentTerm: "",
        activeItem: -1,
        search: "",
        typeAheadActive: false
      }
    },
    props: ['defaultText', 'searchedText'],
    methods: {
      getResults(val) {
        var lastTerm = val.split(' ').slice(-1)[0];
        this.currentTerm = lastTerm;
        var data = mostUsed.getData();
        return data.filter((x) =>
          x.slice(0, lastTerm.length) == lastTerm &&
          x != lastTerm
        ).slice(0, 6);
      },
      select() {
        if(this.activeItem > -1) {
          this.search += this.getActiveItem();
          this.$refs.typeaheadInput.focus();
        } else {
          this.$root.runSearch(this.search);
        }
        this.typeAhead = false;
        this.activeItem = -1;
      },
      getActiveItem() {
        return this.results[this.activeItem].slice(this.currentTerm.length);
      },
      up() {
        if(this.activeItem > -1)
          this.activeItem--;
      },
      down() {
        if(this.activeItem < this.results.length - 1)
          this.activeItem++;
      },
      isActive(index) {
        return (index == this.activeItem) ? "active" : "";
      },
      setActive(index) {
        this.activeItem = index;
      },
      escapeTypeAhead() {
        if(!this.typeAheadActive) {
          this.results = [];
        }
        return;
      },
      typeAheadFocus(b) {
        this.typeAheadActive = b;
      },
      hasDropDown() {
        return (this.results.length == 0) ? "" : "has-dropdown";
      },
      initialSearch() {
        if(this.searchedText && this.searchedText.length > 0) {
          this.search = this.searchedText;
        }
      }
    },
    watch: {
      search: function (val) {
        if(val == "")
          this.results = [];
        else
          this.results = this.getResults(val);
      }
    },
    computed: {
      existingTerms: function() {
        return this.search.substring(0, this.search.lastIndexOf(' ', ))
      }
    },
    mounted () {
      this.initialSearch();
    }
  }
</script>

<style lang="sass" scoped>
  @import "../styles/_vars.sass"

  .inputContainer 
    display: -webkit-flex
    display: flex
    flex-direction: column
    width: 80%
    max-width: 700px
    /* margin: 0 auto */
  
  .inputContainer input 
    @extend %rounded
    width: 100%
    border: none
    height: 35px
    font-size: $item-focus
    margin: 0 auto
    padding: $text-med-pad
    outline: none
    box-shadow: $resting-shadow
    +transition(box-shadow, 0.3s, ease)
  
  .inputContainer input:focus,
  .inputContainer input:hover 
    @extend %rounded
    box-shadow: $active-shadow
  
  .has-dropdown, .has-dropdown:hover, .has-dropdown:focus 
    @extend %top-rounded
    box-shadow: $resting-shadow
  
  .menuContainer 
    @extend %bottom-rounded
    width: 100%
    margin: 0 auto
    margin-top: -3px
    background: white
    box-shadow: $alt-active-shadow
    border-top: $light-grey 1px solid
    font-size: $item-focus
    padding: $text-med-pad
  
  ul 
    width: 100%
    list-style-type: none
    margin: 0 auto
    padding: 0
  
  li 
    text-align: left
    padding: $text-min-pad
    cursor: pointer
  
  .active 
    background: #EEEEEE
    border-radius: 4px
  
</style>
