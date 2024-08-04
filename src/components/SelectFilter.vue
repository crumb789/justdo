<template>
    <div class="select select-filter is-small is-rounded" v-if="howManyItems > 0">
        <!-- <button @click="changeSorted">fdsfds</button>
        <button @click="changeSortedBack">fdsfds</button> -->
        <select @change="changeSorted">
            <option> Newer </option>
            <option> Older </option>
        </select>

        
    </div>
</template>

<script>
export default {
    data() {
        return{

        }
    },
    methods:{
        changeSorted(){
            this.$store.commit('sortedItems')
        },
    },
    computed:{
        howManyItems(){
            return this.$store.state.ListItems.length
        }
    }
}
</script>




<style lang="scss">
.select{
    &-filter{
        position: absolute;
        top: -35px;
        right: 25%;
    }
    
}
@media(max-width: 1024px){
    .select{
        &-filter{
            right: 15%;
        }
        
    }
}
@media(max-width: 768px){
    .select{
        &-filter{
            right: 12.5%;
        }
        
    }
}
</style>