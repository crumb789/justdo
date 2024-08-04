<template>
    <div class="checked check-important" v-if="showButtonImportant > 0">
        <div class="checked-circle">
            <span class="checked-circle_line" :class="{checkbox: checkbox == false }" ></span>
        </div>
        <label class="checkbox-label" for="important-tag" >
            <input type="checkbox" class="checkbox" id="important-tag" name="important-tag" v-model="checkbox" @click="showOnlyImportant" />
            only important
        </label>
        <!-- <button @click="showOnlyImportant">fdsfsd</button> -->
    </div>
</template>

<script>
export default {
    data() {
        return{
            checkbox: false
        }

    },
    methods:{
        showOnlyImportant(){

            this.checkbox = !this.checkbox
            if(this.checkbox == true){
                this.$store.commit('OnlyImportantShow', this.checkbox)
                this.$store.commit('changeImportantFilter', true)
            }
            if(this.checkbox == false){
                this.$store.commit('closeFilterItem')
                this.$store.commit('changeImportantFilter', false)
            }

            
        }
    },
    computed:{
        showButtonImportant(){
            return this.$store.getters.howManyImportant
        }
    }
}
</script>


<style lang="scss">
.checkbox{
    position: absolute;
    z-index: -100;
    opacity: 0;
}

.checked{
    position: absolute;
    width: 200px;
    left: 24%;
    top: -35px;
    &-circle{
        &::before{
            content: '';
            position: absolute;
            width: 15px;
            height: 15px;
            border: 2px solid #c87669;
            top: 50%;
            transform: translateY(-50%);
            left: 30px;
            border-radius: 100%;
        }
        &_line{
            transition: 0.8s all;
            &::before{
                content: "";
                position: absolute;
                width: 13px;
                height: 2px;
                background: #3e8ed0;
                top: 10px;
                transform: translateY(-50%);
                left: 36px;
                rotate: 317deg;
                border-top-right-radius: 1px;
                border-bottom-right-radius: 1px;
            }
            &::after{
                content: "";
                position: absolute;
                width: 8px;
                height: 2px;
                background: #3e8ed0;
                top: 11.5px;
                transform: translateY(-50%);
                left: 31px;
                rotate: 43deg;
                border-top-left-radius: 1px;
                border-bottom-left-radius: 1px;
            }
        }
    }
}

@media(max-width: 1024px){
    .check{
        &-important{
            left: 15%;
        }
    }
}

@media(max-width: 768px){
    .check{
        &-important{
            left: 12.5%;
        }
    }
}

@media(max-width: 425px){
    .check{
        &-important{
            left: 2.5%;
            top: -40px;
        }
    }
}
</style>