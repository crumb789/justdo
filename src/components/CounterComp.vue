<template>
    <div class="counter animate__animated animate__slideInDown" v-if="howDone">
        <div class="counter-go"  v-if="howDone !== howItemsLegth">
            done {{howDone}} out of {{ howItemsLegth }} 
            <span class="line" :style="{width: widthDivider + '%'}" :class="{dividerDone: widthDivider == 100}"></span>
        </div>
        <div class="counter-all_done" v-if="howDone == howItemsLegth">
                completed 
                    <div class="cup">
                        <img class="smoke-one" :src="smoke" alt="smoke_1">
                        <img class="smoke-two" :src="smoke" alt="smoke_2">
                        <img class="smoke-thee" :src="smoke" alt="smoke_3">
                        <i class="bi bi-cup"></i>
                    </div> 
        </div>
    </div>
</template>

<script>
import smoke from '@/assets/svg/smoke1-svgrepo-com.svg'

export default {
    data() {
        return{
            smoke,
        }
    },
    computed:{
        howItemsLegth(){
            return this.$store.state.ListItems.length
        },
        howDone(){
            return this.$store.getters.doneTodosCount
        },
        widthDivider() {
            let max = []
            let current = []
            this.$store.state.ListItems.forEach((item) => {
                (item.check) ? current.push(1) : max = this.$store.state.ListItems.length
            })
            let result = current.reduce((item, sum) => sum + item, 0)
            let procent = 100 / (max / result)
            return (result === this.$store.state.ListItems.length) ? 100 : procent
        },

    }
}
</script>

<style lang="scss" scoped>
.counter{
    animation-duration: 0.3s;
    &-go{
        animation: fadeUpLeft 1 0.5s ease-in;
        span{
            // width: 100%;
            height: 2px;
            display: block;
            background-color: #218f12;
            transition: 0.3s all;
        }
    }
    &-all{
        &_done{
            animation: fadeUpLeft 1 0.5s ease-in;
            display: flex;
            column-gap: 5px;
            align-items: center;
        }
    }
}

.bi{
    position: relative;
    &-cup{
        &::before{
            color: #818181;
        }
    }
}

.cup{
    position: relative;
    display: flex;
    font-size: 18px;
    img{
        position: absolute;
        width: 10px;
        
        &.smoke{
            &-one{
                top: -8px;
                left: -1px;
                animation: UpTo 1.8s ease-in-out infinite;
            }
            &-two{
                top: -12px;
                left: 3px;
                animation: UpTo 2.2s ease-in-out infinite;
            }
            &-thee{
                top: -10px;
                left: 8px;
                animation: UpTo 2.5s ease-in-out infinite;
            }
        }
    }
}


@keyframes fadeUpLeft {
    0% { 
        // font-size: 10px;
        text-align: left;
        opacity:  0;
    }
    100%{
        // font-size: 16px;
        width: none;
        opacity: 1;
    }
}

@keyframes UpTo{
    0%{
        opacity: 0%;
        top: -7px;
    }
    50%{
        opacity: 80%;
        top: -11px;
    }
    100%{
        opacity: 0%;
        top: -14px;
    }
}

@media(max-width: 425px){
    .counter{
        position: absolute;
    }
}
</style>