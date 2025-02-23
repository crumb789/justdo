<template>
    <div class="toggle">
        <div class="toggle-box" @click="changeToggle" :class="{boxDark: whatTheme}">
            <div class="toggle-circle light" :class="{dark: whatTheme}">
                <!-- <i class="bi bi-sun-fill"></i> -->
                <i class="bi bi-lightbulb"></i>
                <!-- <i class="bi bi-moon-fill"></i> -->
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return{

        }
    },
    methods:{
        changeToggle(){
            this.$store.commit('changeToDark')
        }
    },
    computed:{
        whatTheme(){
            return this.$store.state.themeIsDark
        },
    }
}
</script>

<style lang="scss" scoped>
.toggle{
    margin: 5px 0;
    display: flex;
    justify-content: center;
    &-box{
        position: relative;
        width: 80px;
        height: 26px;
        border-radius: 13px;
        border: 2px solid;
        background-color: #eef7ff;
        transition: 0.5s all;
        &:hover{
            // animation: rotateMainRight 1 0.4s ease-in;
        }
    }
    &-circle{
        top: 0px;
        position: absolute;
        width: 22px;
        height: 22px;
        transition: 0.5s all;
    }
}

.light{
    border: 1px solid #f7c25f;
    border-radius: 100%;
    background-color: #f7c25f;
    left: 0px;
    box-shadow: 3px 0 2px #605f5f; 
    .bi-lightbulb::before {
        content: "\f46b";
        color: #363636;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}

.dark{
    top: 0px;
    position: absolute;
    width: 22px;
    height: 22px;
    border: 1px solid #9f9d9a;
    border-radius: 100%;
    background-color: #000000;
    left: 54px;
    box-shadow: -3px 0 2px #222222;
    animation: rotateMainRight 1 0.4s ease-in;
    .bi-lightbulb::before {
        content: "\f46b";
        color: #9f9d9a;
        position: absolute;
        left: 51%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
.boxDark{
    background-color: #595a5a;
}

// .darkRotate{
//     animation: rotateMainRight 1 0.1s;
// }



@keyframes rotateMainRight{
    0%{
        width: 22px;
    }
    25%{
        width: 26px;
    }
    50%{
        width: 18px;
    }
    75%{
        width: 20px;
    }
    100%{
        width: 22px;
    }
}

@keyframes rotatePhantomLeft{
    0%{
        transform: rotateZ(-7deg) translateY(-5px);
    }
    25%{
        transform: rotateZ(0deg) translateY(0px);
    }
    50%{
        transform: rotateZ(7deg) translateY(5px);
    }
    75%{
        transform: rotateZ(0deg) translateY(0px);
    }
    100%{
        transform: rotateZ(-7deg) translateY(-5px);
    }
}

</style>