<template>
  <div id="app">
    <mode-menu></mode-menu>
    <main-search></main-search>
  </div>
</template>

<script>
import MainSearch from './Views/MainSearch.vue'
import MenuToggle from './Components/MenuToggle.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    'main-search': MainSearch,
    'mode-menu': MenuToggle
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
