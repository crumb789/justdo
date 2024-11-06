<template>
    <div class="welcome" :class="{closeModal: openModalSpace}">
        <div class="welcome-text   " :class="{closeModalText: openModalSpace}">
            <!-- {{ welcome }} -->
            <div class="welcomeOne">
                {{ welcome_1 }}
            </div>
            <div class="welcomeTwo">
                {{ welcome_2 }}
            </div>
            <div class="welcomeThree">
                {{ welcome_3 }}
            </div>
            <div class="welcomeFour">
                {{ welcome_4 }}
            </div>
            <div class="welcomeFive">
                {{ welcome_5 }}
            </div>
            <div class="welcomeSix">
                {{ welcome_6 }}
            </div>
            <div class="circle-box">
                <div class="circle-item" v-for="i in circles" :key="i"></div>
            </div>
        </div>
        <div class=" welcome-btn" @click="closeModalSpace"  
            :class="{closeModalBtn: openModalSpace}">
                <i v-if="iconNow == 0" class="bi bi-forward"></i>
                <i v-if="iconNow == 1" class="bi bi-bookshelf"></i>
                <i v-if="iconNow == 2" class="bi bi-boombox"></i>
                <i v-if="iconNow == 3" class="bi bi-box-seam"></i>
                <i v-if="iconNow == 4" class="bi bi-brightness-alt-high-fill"></i>
                <i v-if="iconNow == 5" class="bi bi-bug"></i>
                <i v-if="iconNow == 6" class="bi bi-calendar2-day"></i>
        </div>
    </div>
</template>


<script>

export default {
    data() {
        return{
            // welcome: 'For the cause',
            welcome_1: 'Just ',
            welcome_2: ' Do',
            welcome_3: '.',
            welcome_4: '.',
            welcome_5: '.',
            welcome_6: 'ToDo',
            text: [],
            openModalSpace: false,
            circles: 10,
            iconsTake:[0,1,2,3,4,5,6,7,8,9],
            iconNow: 0,
        }
    },
    methods:{
        closeModalSpace(){
            this.openModalSpace = !this.openModalSpace
            this.$store.commit('modalClose')
        },
        // textGo(){
        //     console.log('fix welcome')
        // },
        changeIcon(){
            this.randomNumber()
        },
        randomNumber(){
            let randomNumber = Math.floor(Math.random() * 6) + 1;
            this.iconNow = randomNumber
        }
    },
    computed: {
        checkModal(){
            return this.$store.state.modalWindow
        }
    },
    mounted() {
        // this.textGo()
        this.changeIcon()
    }

}
</script>

<style lang="scss" scoped>
.welcome{
    overflow-y: hidden;
    top: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    font-size: 45px;
    background-color: #f0f8ff !important;
    font-family: "Reem Kufi Ink", sans-serif;
    font-weight: 400;
    z-index: 100;
    background: red($color: #000000);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s all;
    &-btn{
        position: absolute;
        top: 60%;
        cursor: pointer;
        color: #000;
        display: inline-block;
        // margin: 0 0.5rem;
        animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
        animation-duration: 1.5s; /* don't forget to set a duration! */
        animation-delay: 2.4s;
        animation-fill-mode:backwards;
        :hover{
            transition: 0.2s all;
            // font-size: 55px;
            color: #648f91;
        }
    }
    &-text{
        position: relative;
        // box-shadow: 2px 2px 1px #000;
        // border: 1px solid #000;
        padding: 50px 50px 220px 50px;
        // border-radius: 15px;
        text-decoration: underline;
    }
}

.welcomeOne{
    display: inline-block;
    // margin: 0 0.5rem;
    animation: backInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.5s; /* don't forget to set a duration! */
    animation-delay: 0.1s;
    animation-fill-mode:backwards;
}
.welcomeTwo{
    display: inline-block;
    margin-left: 5px;
    animation: backInRight; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.5s; /* don't forget to set a duration! */
    animation-delay: 0.1s;
    animation-fill-mode:backwards;
}

.welcomeThree{
    display: inline-block;
    margin: 0 0.1rem;
    animation: bounceInDown; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.5s; /* don't forget to set a duration! */
    animation-delay: 0.55s;
    animation-fill-mode:backwards;
}
.welcomeFour{
    display: inline-block;
    margin: 0 0.1rem;
    animation: bounceInDown; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.5s; /* don't forget to set a duration! */
    animation-delay: 0.35s;
    animation-fill-mode:backwards;
}
.welcomeFive{
    display: inline-block;
    margin: 0 0.1rem;
    animation: bounceInDown; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.5s; /* don't forget to set a duration! */
    animation-delay: 0.45s;
    animation-fill-mode:backwards;
}
.welcomeSix{
    color: hsl(142, 52%, 96%);
    background: hsl(171, 100%, 29%);
    border-radius: 7px;
    text-decoration: underline;
    display: inline-block;
    margin: 0 0.1rem;
    animation: bounceInRight; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.5s; /* don't forget to set a duration! */
    animation-delay: 1.4s;
    animation-fill-mode:backwards;
}

.closeModal{
    animation: opacityFade 1s 1 ease;
    display: none;
}

.circle{

    &-box{
        left: 10px;
        position: absolute;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-around;
        top: 0;
    }
    &-item{
        width: 15px;
        height: 15px;
        /* krujki */
        // border: 1px solid #00000063;
        border-radius: 100%;
    }
}

@keyframes opacityFade{
    0%{
        top: 50%;
    }
    100%{
        top: -50%;
    }
}

@media(max-width: 425px){
    .welcome{
        &-text{
            width: 90%;
        }
    }
}
</style>