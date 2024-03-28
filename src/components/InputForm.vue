<template>
    <div class="container">
        <div class="form">
            <form @submit.prevent="OnSubmit" >
                <input id="input-form" class="input is-info is-small" type="text" v-model="item" maxlength="80" placeholder="type here...">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            item: ''
        }
    },
    methods:{

        OnSubmit(){

            let now = `${new Date().getDate()}.${new Date().getMonth() + 1}.${ new Date().getFullYear() }`
            /* if empty item -> dont push */
            if(this.item && this.item !== ' ' && this.item !== '  ' && this.item !== '   '){
                /* create body item */
                let note = {   
                    id: Date.now(),
                    text: this.item,
                    check: false ,
                    dateCreate: now,
                    important: false
                }
            
                /* push item to LIST in store */
                this.$store.commit('NewItem', note)

                this.item = ''
            }
            else false
            
        }
    }
}
</script>


<style lang="scss" >
.input{
    width: 200px;
}
.is-small{
    &.input{
        border-radius: 6px;
    }
}
</style>