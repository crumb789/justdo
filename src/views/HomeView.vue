<template>
    <welcome-animation v-if="checkModal"></welcome-animation>
  <div class="container">

      <div class="main">
          <h1  class="title" @click="counterTitle">{{ title }} 
            <span>
                <counter-comp></counter-comp>
            </span>
        </h1>
          <h5  class="title-counter" ></h5>
      </div>

<!-- inputs -->
      <input-form ></input-form>
<!-- search button activate -->

      
      <list-items></list-items>       
      
  </div>
  <footer-comp></footer-comp>
</template>


<script>
import InputForm from '@/components/InputForm.vue'
import ListItems from '@/components/ListItems.vue'
import CounterComp from '@/components/CounterComp.vue'
import WelcomeAnimation from '@/components/UI/WelcomeAnimation.vue'
import FooterComp from '@/components/FooterComp.vue'




export default {
components: { 
      InputForm,
      ListItems,
      CounterComp,
      WelcomeAnimation,
      FooterComp
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
      checkModal(){
          return this.$store.state.modalWindow
      }
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
  font-size: 40px;
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

@media(max-width: 425px){
    .title{
        position: relative;
        margin-bottom: 50px;
    }
}
</style>