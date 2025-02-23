<template>
    <div v-if="!GetAllItemsLength" 
        class="placeholder animate__animated animate__shakeX"
        :class="{placeholderIsDark: whatTheme}">
        It's time to add a new task <i class="bi bi-bandaid"></i>
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
.placeholderIsDark{
    color: #eef7ff;
}
</style>