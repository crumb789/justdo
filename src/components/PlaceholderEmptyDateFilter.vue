<template>
    <div v-if="!GetItemsFilterLength" 
        class="placeholder animate__animated animate__shakeX"
        :class="{placeholderIsDark: whatTheme}">
        There is nothing on this date <i class="bi bi-journal"></i>
    </div>
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
        whatTheme(){
            return this.$store.state.themeIsDark
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