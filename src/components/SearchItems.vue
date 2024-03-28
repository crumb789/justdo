<template>
        <div class="field">
            <div class="control is-small">
                <form @submit.prevent='searching' >
                    <input id="search-form" class="input is-info is-small" type="text" v-model="textToSearch" :placeholder="placeholder">
                </form>               
            </div>
        </div>
</template>


<script>
export default {
    data() {
        return{
            placeholder: 'filter (whole word)',
            textToSearch:''
        }
    },
    methods:{
        searching(){
            this.$store.commit('SearchItemsInput', this.textToSearch)
        }
    }
}
</script>

<style lang="scss" scoped>
.field{
    margin: 0;
}
form{
    width: 200px;
    margin: 0 auto;
    &::after{
        position: absolute;
        left: 0;
    }
}
.input{
    width: 200px;
    height: 30px;
    font-size: 0.75rem;
}
</style>


