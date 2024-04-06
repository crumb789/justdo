<template>
    <div class="check-important" v-if="showButtonImportant > 0">
        <label class="checkbox">
            <input type="checkbox" v-model="checkbox" @click="showOnlyImportant" />
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
                console.log('true 111')
                this.$store.commit('OnlyImportantShow', this.checkbox)
                this.$store.commit('changeImportantFilter', true)
            }
            if(this.checkbox == false){
                console.log('false 222')
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
.check{
    &-important{
        position: absolute;
        top: -30px;
        left: 25%;
    }
    
}

input[type='checkbox']{
    // display: none;
    &::before{
        content: '';
        width: 20px;
        height: 20px;
        color: red;
    }
}


</style>