<template>
    <div class="checked check-important" v-if="showButtonImportant > 0">
        <div class="checked-circle" :class="{chekedUse: checkbox}">
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
    left: 0;
    opacity: 0;
    &-label{
        cursor: pointer;
        padding: 2px 11px;
        background-color: #eef7ff;
        border-radius: 3px;
        border: 1px solid #dbdbdb;
    }
}

.checked{
    position: absolute;
    width: 200px;
    left: 24%;
    top: -31px;
    &-circle{
        &::before{
            content: '';
            position: absolute;
            width: 14px;
            height: 14px;
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

.chekedUse{
    &::before{
            content: '';
            border: 7px solid rgb(92 230 175);
            transition: 0.5s all;
            width: 5px;
            height: 5px;
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
            top: -31px;
        }
    }
}
</style>