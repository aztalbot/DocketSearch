<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
  @import "styles/_vars.sass"

  #app
    @extend %no-marg-padd
    font-family: $font-stack
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: $panes-grey

  body,
  html
    @extend %no-marg-padd
</style>
