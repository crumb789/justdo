<template>
    <div class="container">
        <div class="form">

            <form v-if="btnMore" @submit.prevent="OnSubmit" >
                <div class="form-box">

                   <!--deleted maxlength="80"  -->

                    <input id="input-form"  required
                    class="input is-info is-small" type="text" v-model="item" 
                    placeholder="type here...">
                    <button id="button" class="button is-success is-dark">Push</button>
                </div>
                <div @click="changeBtnMore" class="button is-ghost animate__animated animate__fadeInUp" title="more data ">
                    <!-- more data -->
                    <i class="bi bi-arrow-bar-down"></i>
                </div>
            </form>

            <!-- /////////////// -->
            <form v-if="!btnMore" @submit.prevent="OnSubmit" >
                <div class="form-box">

                    <!--deleted maxlength="80"  -->
                    
                    <input id="input-form " 
                    class="input is-info is-small " type="text" v-model="item"  
                    placeholder="type here...">
                    <button id="button" class="button is-success is-dark">Push</button>
                    
                </div>
                <label class="label animate__animated animate__lightSpeedInLeft" for="input-date">When should I do it?</label>
                <input id="input-date" required
                    v-model="mustDone"
                    class="input input-date is-info is-small animate__animated animate__jackInTheBox " type="date">
                <div @click="changeBtnMore" class="button is-ghost animate__animated animate__backInDown" title="close">
                    <i class="bi bi-arrow-bar-up"></i>
                    <!-- close -->
                </div>
            </form>
            
            <!-- data, if choise -->
            <div class="data" v-if="actualDateForItems[0]">
                <span  class="data-number data-box data-box-line">
                    {{ actualDateForItems }}
                </span>
                <span @click="resetDataToSorted"
                    class="data-close" title="reset this date">
                        <i class="bi bi-door-closed"></i>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            item: '',
            // nowDay: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
            btnMore: true,
            mustDone: null,
        }
    },
    methods:{
        OnSubmit(){

            let now = `${new Date().getDate()}.${new Date().getMonth() + 1}.${ new Date().getFullYear() }`
            /* if empty item -> dont push */
            if(this.item && this.item !== ' ' && this.item !== '  ' && this.item !== '   ' && this.mustDone){
                /* create body item */
                let note = {   
                    id: Date.now(),
                    text: this.item,
                    check: false ,
                    dateCreate: now,
                    important: false,
                    mustDone: this.mustDone.split('-').reverse().join('.'),
                    mustDoneparse:  this.mustDone
                }
            
                /* push item to LIST in store */
                this.$store.commit('NewItem', note)

                this.item = ''
                this.btnMore = true
                this.mustDone = ''
            }
            if(this.item && this.item !== ' ' && this.item !== '  ' && this.item !== '   ' && !this.mustDone){
                /* create body item */
                let note = {   
                    id: Date.now(),
                    text: this.item,
                    check: false ,
                    dateCreate: now,
                    important: false,
                }
            
                /* push item to LIST in store */
                this.$store.commit('NewItem', note)

                this.item = ''
                this.btnMore = true
                this.mustDone = ''
            }
            else false
            
        },
        changeBtnMore(){
            this.btnMore = !this.btnMore
            if(this.btnMore == true) {
                this.mustDone = ''
            }
        },
        resetDataToSorted(){
            this.$store.commit('resetDataToSorted')
        }
    },
    computed:{
        actualDateForItems(){
            return this.$store.state.DataToSorted
        }
    }
}
</script>


<style lang="scss" >
.form{
    position: relative;
    width: 300px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;   
    gap: 3px;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
    }
}

.label{
    font-size: 14px;
}

.input{
    width: 200px;
    &-date{
        // margin-top: 3px !important;
        display: flex;
        margin: 0 auto;
        justify-content: center;
    }
}

.is-small{
    &.input{
        border-radius: 6px;
    }
}
.button.is-ghost.is-focused:not(:active), .button:focus:not(:active){
    box-shadow: none;
}
#button{
    height: 30px;
    margin-left: 3px;
}
.data{
    position: absolute;
    top: 20%;
    right: -26%;
    transform: translateY(-50%);
    &-box{
        animation: fadeUp 1 0.2s ease;
        position: relative;
        // border: 1px solid #000;
        // padding: 2px;
        // border-radius: 6px;
        // margin: 3px;
        font-family: "Dosis", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 18px;
        &-line{
            // border: 1px solid #000;
            &::before{
                // content: "";
                position: absolute;
                display: block;
                width: 100%;
                height: 1px;
                background-color: #000;
                top: 50%;
                left: 0;
            }

        }
    }
    &-close{
        position: absolute;
        font-size: 18px;
        margin-left: 5px;
        cursor: pointer;
    }
}

@keyframes fadeUp {
    0% { 
        font-size: 10px;
        opacity: 0.5;
    }
    100%{
        font-size: 16px;
        opacity: 1;
    }
}
@media(max-width:425px)
    {
        .data{
            top: -34px !important;
            right: 5% !important;
        }
    }
</style>