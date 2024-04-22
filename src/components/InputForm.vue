<template>
    <div class="container">
        <div class="form">
            <form @submit.prevent="OnSubmit" >
                <input id="input-form" class="input is-info is-small" type="text" v-model="item" maxlength="80" placeholder="type here...">
            </form>
            <div class="data">
                <span v-if="actualDateForItems[0]" class="data-number data-box data-box-line">
                    {{ actualDateForItems[0] + ' ' }}
                </span>
                <span v-if="actualDateForItems[1]" class="data-months data-box data-box-line">
                    {{ actualDateForItems[1] + ' '  }}
                </span>
                <span v-if="actualDateForItems[2]" class="data-year data-box data-box-line">
                    {{ actualDateForItems[2] }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            item: ''
        }
    },
    methods:{
        OnSubmit(){

            let now = `${new Date().getDate()}.${new Date().getMonth() + 1}.${ new Date().getFullYear() }`
            /* if empty item -> dont push */
            if(this.item && this.item !== ' ' && this.item !== '  ' && this.item !== '   '){
                /* create body item */
                let note = {   
                    id: Date.now(),
                    text: this.item,
                    check: false ,
                    dateCreate: now,
                    important: false
                }
            
                /* push item to LIST in store */
                this.$store.commit('NewItem', note)

                this.item = ''
            }
            else false
            
        },
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
}
.input{
    width: 200px;
}
.is-small{
    &.input{
        border-radius: 6px;
    }
}
.data{
    position: absolute;
    top: 50%;
    right: 31%;
    transform: translateY(-50%);
    &-number{

    }
    &-months{

    }   
    &-year{
        
    }
    &-show{
        cursor: pointer;
        right: -40%;
    }
    &-reset{
        cursor: pointer;
        position: absolute;
        top: 55%;
        left:  -103%;
        transform: translateY(-50%);
    }
    &-box{
        animation: fadeUp 1 0.2s ease;
        position: relative;
        // border: 1px solid #000;
        // padding: 2px;
        // border-radius: 6px;
        // margin: 3px;
        font-family: "Jersey 10 Charted", sans-serif;
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
</style>