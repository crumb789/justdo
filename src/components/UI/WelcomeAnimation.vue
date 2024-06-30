<template>
    <div class="welcome" :class="{closeModal: opneModalSpace}">
        <div class="welcome-text animate__animated animate__backInDown" :class="{closeModalText: opneModalSpace}">
            {{ welcome }}
        </div>
        <div class=" welcome-btn animate__animated animate__backInUp" :class="{closeModalBtn: opneModalSpace}">
            <i @click="closeModalSpace" class="bi bi-card-checklist"></i>
        </div>
    </div>
</template>


<script>

export default {
    data() {
        return{
            welcome: 'Just Do..ToDo',
            text: [],
            opneModalSpace: false
        }
    },
    methods:{
        closeModalSpace(){
            this.opneModalSpace = !this.opneModalSpace
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
    mounted() {
        this.textGo()
    }

}
</script>

<style lang="scss" scoped>
.welcome{
    position: absolute;
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
    &-btn{
        position: absolute;
        top: 60%;
        cursor: pointer;
        color: #5f9ea0;
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
@keyframes opacityFade{
    0%{
        top: 50%;
    }
    100%{
        top: -50%;
    }
}

</style>