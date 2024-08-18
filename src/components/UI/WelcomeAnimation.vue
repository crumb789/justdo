<template>
    <div class="welcome" :class="{closeModal: openModalSpace}">
        <div class="welcome-text animate__animated animate__backInDown" :class="{closeModalText: openModalSpace}">
            {{ welcome }}
            <div class="circle-box">
                <div class="circle-item" v-for="i in circles" :key="i"></div>
            </div>
        </div>
        <div class=" welcome-btn animate__animated animate__backInUp" :class="{closeModalBtn: openModalSpace}">
            <i @click="closeModalSpace" class="bi bi-forward"></i>
        </div>
    </div>
</template>


<script>

export default {
    data() {
        return{
            welcome: 'For the cause',
            text: [],
            openModalSpace: false,
            circles: 10
        }
    },
    methods:{
        closeModalSpace(){
            this.openModalSpace = !this.openModalSpace
            this.$store.commit('modalClose')
        },
        textGo(){
            // // this.text.push(this.welcome)
            // this.welcome = this.welcome.split('')
            // this.welcome.forEach(element => {
            //     this.text.push(element)
            //     setTimeout(() => {
            //         console.log("Delayed for 1 second.");
            //     }, 2000);             
            // });

            // this.text = this.text.join('')
            // console.log(this.text) 
            console.log('fix welcome')
        }
    },
    computed: {
        checkModal(){
            return this.$store.state.modalWindow
        }
    },
    mounted() {
        this.textGo()
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
    font-size: 50px;
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
        :hover{
            transition: 0.2s all;
            // font-size: 55px;
            color: #648f91;
        }
    }
    &-text{
        box-shadow: 2px 2px 1px #000;
        border: 1px solid #000;
        padding: 50px 50px 220px 50px;
        border-radius: 15px;
        text-decoration: underline;
    }
}


.closeModal{
    animation: opacityFade 1s 1 ease;
    display: none;
}
.closeModalText{

}
.closeModalBtn{
    
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
        border: 1px solid #00000063;
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