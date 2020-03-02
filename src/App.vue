<template>
  <div id="app">
    <div id="nav">
      <router-link to="/index">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('initState')
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e1dcd9;
  min-height: 100vh;
}

#nav {
  padding: 20px 0;
  background-color: #a67f78;
  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
