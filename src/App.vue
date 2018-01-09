<template>
  <div id="app">
    <mode-menu/>
    <router-view/>
  </div>
</template>

<script>
import MenuToggle from './Components/MenuToggle.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
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
