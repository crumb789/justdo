<template>
    <welcome-animation></welcome-animation>
  <div class="container">

      <div class="main">
          <h1  router-link='/home' class="title" @click="counterTitle">{{ title }} <span><counter-comp></counter-comp></span></h1>
          <h5 class="title-counter" ></h5>
      </div>

<!-- inputs -->
      <input-form ></input-form>
<!-- search button activate -->

      
      <list-items></list-items>       
      
  </div>
</template>


<script>
import InputForm from '@/components/InputForm.vue'
import ListItems from '@/components/ListItems.vue'
import CounterComp from '@/components/CounterComp.vue'
import WelcomeAnimation from '@/components/UI/WelcomeAnimation.vue'



export default {
components: { 
      InputForm,
      ListItems,
      CounterComp,
      WelcomeAnimation,
  },
  data() {
      return{
          title: 'Just Do..ToDo',
          activeBtn: true,
      }
  },
  methods:{
      changeBtn(){
          this.activeBtn = !this.activeBtn
      },
      closeFilter(){
          this.$store.commit('closeFilterItem',)
      },
  },
  computed:{
      titleComputed(){
          let arr
          return arr
      },       
      GetAllItems(){
          return this.$store.state.ListItems
      },
  },
  mounted(){
      // this.counterTitle()
  }
}
</script>


<style lang="scss" scoped>
*{
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.main{
  display: block;
}
.title{
  position: relative;
  width: 282px;
  margin: 0 auto;
  font-family: "Reem Kufi Ink", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin-bottom: 30px;
  margin-top: 30px;
  span{
      font-weight: 300;
      font-size: 14px;
      position: absolute;
      right: -30%;
      top: 50%;
  }
}

.button{
  font-size: 14px;
  margin-top: 8px;
  width: 70px;
  height: 30px;
  padding: 5px 6px;
  align-items: center;
  &:focus{
      box-shadow: none;
  }
}
</style>