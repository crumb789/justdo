<template>
    <welcome-animation v-if="checkModal"></welcome-animation>
    <!-- <tutur-vue></tutur-vue> -->
  <div class="container">

      <div class="main">
          <h1  class="title" @click="counterTitle">{{ title }} 
            <span>
                <i @click="settingOpen" class="bi bi-gear-fill setting"></i>
                <modal-setting v-if="checkSettingMenu"></modal-setting>
            </span>
            <span id="counter-box">
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
import ModalSetting from '@/components/UI/ModalSetting.vue'

// import TuturVue from '@/components/UI/TuturVue.vue'


export default {
components: { 
      InputForm,
      ListItems,
      CounterComp,
      WelcomeAnimation,
      FooterComp,
      ModalSetting,
    //   TuturVue
  },
  data() {
      return{
          title: 'Just Do...ToDo',
          activeBtn: true,
          setting: false,
      }
  },
  methods:{
      changeBtn(){
          this.activeBtn = !this.activeBtn
      },
      closeFilter(){
          this.$store.commit('closeFilterItem',)
      },
      settingOpen(){
        this.$store.commit('settingMenuChange',)
      }
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
      },
      checkSettingMenu(){
          return this.$store.state.setting
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

#html{
    background-color: rebeccapurple !important;
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

}
#counter-box{
      font-weight: 300;
      font-size: 14px;
      position: absolute;
      right: -50%;
      top: 50%;
      transform: translate(0, -3px);
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
.setting{
    font-size: 14px;
    cursor: pointer;
}


@media(max-width:768px){
    .title{
        position: relative;
        margin-bottom: 40px;
    }

    #counter-box{
        right: 3%;
        top: 120%;
    }
    
}
@media(max-width: 425px){
    .title{
        position: relative;
        margin-bottom: 50px;
    }
    #counter-box{
        right: 0;
        top: 120%;
        /* min-width: 130px; */
        width: 140px;
        height: 20px;
    }
}
</style>