<template>
    <div v-if="!GetAllItemsLength" class="placeholder animate__animated animate__shakeX">
        It's time to add a new task <i class="bi bi-bandaid"></i>
    </div>

    <!-- <div v-if="!GetItemsFilterLength" class="placeholder animate__animated animate__shakeX">
        It's empty here <i class="bi bi-funnel"></i>
    </div> -->
</template>


<script>
export default {
    data() {
        return{

        }
    },
    computed:{
        GetAllItemsLength(){
            return this.$store.state.ListItems.length
        },
        GetItemsFilterLength(){
            return this.$store.state.Filter.length
        },
        // GetSortedItemsLength(){
        //     return this.$store.getters.sortedItemsForId.length
        // },
    }
}
</script>


<style lang="scss">
.placeholder{
    margin-top: 40px;
    font-size: 20px;
}
</style>