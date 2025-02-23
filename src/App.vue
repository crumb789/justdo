<template >
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/main">Main Page</router-link> 
  </nav> -->
  <back-app></back-app>
  <router-view/>

  <footer-comp></footer-comp>
</template>

<script>
import BackApp from './components/UI/BackApp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  
  data() {
    return{
    }
  },
  components: {
    BackApp,
    FooterComp
    ///////////    
  },
  computed:{
    backgroundNumber(){
      return this.$store.getters.backgroundsTwo
    }
  },
  mounted(){
    console.log( new Date().getMonth() + 1 )
  },
  beforeMount() {
    this.$store.commit('initialiseListItems')
    // this.$store.commit('initialiseSortedList')
  },  
}
</script>


<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  width: -webkit-fill-available;
  // background-color: #e6f3ff;
  // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23f0f8ff' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");
  // min-height: 950px;
  height: 100vh;
}

:root{
  // background-color: #1a1a1a;
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
.darkBackColorTitle{
  color: #eef7ff;
  // background-color: #595a5a !important;    
  &::before{
    background-color: #595a5a !important;    
  border: 1px solid #797c7e;   

  }
}
.darkBackColor{
  color: #eef7ff !important;
  background-color: #595a5a !important; 
  border: 1px solid #797c7e !important;   
}


</style>
