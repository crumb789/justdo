<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/main">Main Page</router-link>
  </nav>
  <router-view/>
</template>


<script>
export default {
  data() {
    return{
      
    }
  },
  mounted(){
    console.log( new Date().getMonth() + 1 )
  }
}
</script>


<style lang="scss">
html{
  background-color: aliceblue;  /* back all screen */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.container{
  max-width: 1440px;
  margin: 0 auto;
}

</style>
