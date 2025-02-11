<template>
    <div class="modal" style=" display: block;">
  <div class="modal-background"></div>
  <div class="modal-content">
    <!-- Any other Bulma elements you want -->
  </div>
  <button  @click="closeMenu" class="modal-close is-large" id="close" aria-label="close"></button>
</div>
    <div class="setting-box animate__animated animate__fadeInDown animate__faster">
        <ul class="menu">
            <ul class="backgr">Backgrounds:
                <li @click="choiseTheme(number)"
                    v-for="number in themeHWO" :key="number.id" 
                    :class="{ListActive: number.count === numberTheme}"
                    class="backgr_list backgr_list "
                    :style="{ 'background-color': BackgroundColorFromStore, 
                    'background-image': background}" >
                        {{ number.text }}
                </li>
                <li>
                    <form id="form" @submit.prevent="changeColorOne">
                        <input id="colorOne" type="color" 
                            :value="BackgroundColorFromStore" @input="selectColorsOne">
                            <!-- <input type="range" v-model="opColorOne" min="0.1" max="1" step="0.1"> -->
                        <button><i class="bi bi-check-lg"></i></button>
                    </form>

                    <form id="formTwo" @submit.prevent="changeColorTwo">
                        <input id="colorOne" type="color" 
                            :value="BackgroundColorSecondFromStore" 
                            @input="selectColorsTwo">

                            <button><i class="bi bi-check-lg"></i></button>

                            <label for="opacityTwo" class="opacity">Opacity</label>
                            <input type="range" id="opacityTwo"
                                v-model="opColorTwo" 
                                @change="changeOpacityTwo"
                                min="0.1" 
                                max="1" 
                                step="0.1">                        
                    </form>
                    <button class="button is-small button-reset" @click="resetAllColors">Return</button>
                </li>
            </ul>
            
            <li class="menu_list-delete" @click="youSure">Delete all notes</li>
            <!-- <li @click="closeMenu" class="menu_list-close">Close</li> -->
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return{
            themeHWO: [
                {
                    id: 0,
                    count: 1,
                    text:'Random Shapes'
                },
                {
                    id: 1,
                    count: 2,
                    text:'Cork Screw'
                },
                {
                    id: 2,
                    count: 3,
                    text:'Kiwi'
                },
            ],
            colorOne: '',
            colorSecond: '',
            opColorOne: '1',
            opColorTwo: '0.3'
        }
    },
    methods:{
        closeMenu(){
            this.$store.commit('settingMenuClose')
        },
        choiseTheme(number){
            this.$store.commit('changeThmeme', number.count)
        },
        changeColorOne(){
           this.$store.commit('changeColorBackgr', this.colorOne)
        },
        changeColorTwo(){
            this.$store.commit('changeColorBackgrSecond', this.colorSecond, this.opColorTwo)
        },
        selectColorsOne(event){
            this.colorOne = event.target.value;
            // console.log('hgfhf', this.colorOne)
        },
        selectColorsTwo(event){
            this.colorSecond = event.target.value;
            // console.log('hgfhf', this.colorSecond)
        },
        changeOpacityTwo(){
            this.$store.commit('changeOpacityTwo', this.opColorTwo)
        },
        resetAllColors(){
            this.$store.commit('resetColors')
        },
        youSure(){
            let answer = confirm('You Sure? Delete everything?')
            
            if(answer){
                this.$store.commit('DeleteAllItems')
                this.closeMenu()
            }
            else false

        },


    },
    computed:{
        numberTheme(){
            return this.$store.state.themeBack
        },
        background(){
            return this.$store.getters.backgrounds
        },
        BackgroundColorFromStore(){
            let a = this.$store.state.BackgroundColor
            return a
        },
        BackgroundColorSecondFromStore(){
            return this.$store.state.BackgroundColorSecond
        },
    }
}
</script>

<style lang="scss">
.setting{
    &-box{
        position: absolute;
        top: 0;
        right: 0;
        font-size: 14px;
        width: 280px;
        height: 300px;
        border: 1px solid #000;
        border-radius: 8px;
        z-index: 80;
        background-color: #ffffff;
    }
}
ul{
    &.menu{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    li{
        margin: 5px 0;
        &:hover{
            cursor: pointer;
        }
        &.menu_list{
            &-delete{
                transition: 0.3s all;
                padding: 4px;
                &:hover{
                    background: #933737;
                    color: #f5bf6e;
                    border-radius: 5px;
                }
            }
        }
        
    }
}
.backgr{
    margin: 22px 0;
    &_list{
        text-align: left;
        transition: 0.2s all;
        border-radius: 3px;
        padding: 0px 3px;
        border: 1px solid;
        // -webkit-box-shadow: 0px 1px 1px 0px rgba(34, 60, 80, 0.2) ;
        // -moz-box-shadow: 0px 1px 1px 0px rgba(34, 60, 80, 0.2) ;
        // box-shadow: 0px 1px 1px 0px rgba(34, 60, 80, 0.2) ;
        &:hover{
            border: 1px solid #f5bf6e;
        }
    }        
        
}
.ListActive{
    color: #933737;
    // border: 0.5px #000 solid;
    border-radius: 3px;
    padding: 8px 3px 8px 5px;
    // box-shadow: -2px -1px 2px grey inset, 1px 1px 1px #bdb7b7 inset;
    -webkit-box-shadow: 0px 3px 2px 0px rgba(34, 60, 80, 0.2) inset;
    -moz-box-shadow: 0px 3px 2px 0px rgba(34, 60, 80, 0.2) inset;
    box-shadow: 0px 3px 2px 0px rgba(34, 60, 80, 0.2) inset;
}
#form{
    display: flex;
    // justify-content: center;
    justify-content: flex-start;
    gap: 5px;
}
#formTwo{
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 5px;
}
#colorOne{
    cursor: crosshair;
}
button{
    cursor: pointer;
}
.button{
    &-reset{
        margin-top: 10px;
    }
}
.opacity{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(50%);
}


@media(max-width: 425px){
    #close{
        top: 0px;
    }
}
</style>