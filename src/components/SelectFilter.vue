<template>
    <div class="select is-small is-rounded" v-if="howManyItems > 0">
        <!-- <button @click="changeSorted">fdsfds</button>
        <button @click="changeSortedBack">fdsfds</button> -->
        <select>
            <option>The old ones first</option>
            <option>New ones first</option>
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
            this.$store.state.commit('sortedItems')
        },
        changeSortedBack(){
            this.$store.commit('sortedItemsBack')
        }
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
    position: absolute;
    top: -30px;
    right: 25%;
}
</style>