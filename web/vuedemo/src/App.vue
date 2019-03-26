<template lang='pug'>
    Container
      router-view
</template>

<script>
import Container from './components/Container'
export default {
  name: 'App',
  components: {
    Container
  },
  data () {
    return {
      console: undefined
    }
  },
  watch: {
    '$route': 'getPage'
  },
  methods: {
    getPage () {
      if (this.$route.name === 'Login' || this.$route.name === 'Register' || this.$route.name === 'Home' || this.$route.name === 'FirstTime') {
        this.console = false
      } else {
        this.console = true
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
