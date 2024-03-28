<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>Првет, Юлия</h1>
    <h2>{{ count }}</h2>
    <button @click="update" :disabled="count == 2">+1</button>
    <button @click="downgrade" :disabled="count <= 0">-1</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return{
      count: 0
    }
  },
  methods:{
    update(){
      this.count = this.count + 1
    },
    downgrade(){
      this.count = this.count - 1
    }
  },
}
</script>
