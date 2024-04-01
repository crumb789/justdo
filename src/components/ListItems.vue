<template>
    <div class="list">
        <check-important></check-important>
        <select-filter></select-filter>

        <div class="main-list" v-if="GetAllItemsFilter.length < 1">
            <div class="list-item" v-for="item in GetAllItems" :key="item.id">
                <div class="item box" :class="{green: item.check}" @mouseenter="deleteButton = item.id" @mouseleave="deleteButton = false">
                    
                    <!-- done check -->
                    <button v-if="!item.check && item.check !== null" title="This is done"
                        class="check button is-ghost" @click="CheckThisitem(item)">
                        <i class="bi bi-check2"></i>
                    </button>
                    <button v-if="item.check  && item.check !== null" title="Back to work"
                        class="check button is-ghost" @click="CheckOffThisitem(item)">
                        <i class="bi bi-arrow-counterclockwise"></i>
                    </button>
                    
                    <!-- important change -->
                    <button v-if="item.important && item.important !== null" title="It's not that important" 
                        class="important button is-ghost" @click="ThisImportantOff(item)">
                        <i class="bi bi-patch-exclamation"></i>
                    </button>
                    <button v-if="!item.important && item.important !== null" title="This is important"
                        class="important-off button is-ghost" @click="ThisImportant(item)">
                        <i class="bi bi-exclamation"></i>
                    </button>

                        {{ item.text }} 

                    <!-- delete btns    -->
                    <button  v-if="deleteButton === item.id" title="Delete it?"
                        class="delete" @click="DeleteThisitem(item)">
                    </button>   
                    <div v-if="deleteButton === item.id"
                        class="item-data">{{ item.dateCreate }}
                    </div>             
                </div>
            </div>
        </div>

        <div v-if="GetAllItemsFilter" class="filter">
            <div class="list-item" v-for="item in GetAllItemsFilter" :key="item.id">
                <div class="item box" :class="{green: item.check}" @mouseenter="deleteButton = item.id" @mouseleave="deleteButton = false">
                    
                    <!-- done check -->
                    <button v-if="!item.check" title="This is done"
                        class="check button is-ghost" @click="CheckThisitem(item)">
                        <i class="bi bi-check2"></i>
                    </button>
                    <button v-if="item.check" title="Back to work"
                        class="check button is-ghost" @click="CheckOffThisitem(item)">
                        <i class="bi bi-arrow-counterclockwise"></i>
                    </button>
                    
                    <!-- important change -->
                    <button v-if="item.important" title="It's not that important"
                        class="important button is-ghost" @click="ThisImportantOff(item)">
                        <i class="bi bi-patch-exclamation"></i>
                    </button>
                    <button v-if="!item.important"  title="This is important"
                        class="important-off button is-ghost" @click="ThisImportant(item)">
                        <i class="bi bi-exclamation"></i>
                    </button>

                        {{ item.text }} 

                    <!-- delete btns    -->
                    <button  v-if="deleteButton === item.id" title="Delete it?"
                        class="delete" @click="DeleteThisitem(item)">
                    </button>   
                    <div v-if="deleteButton === item.id"
                        class="item-data">{{ item.dateCreate }}
                    </div>             
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
import SelectFilter from './SelectFilter.vue'
import CheckImportant from './CheckImportant.vue'



export default {
    components: {
        SelectFilter,
        CheckImportant
       
    },
    data() {
        return{
            deleteButton: false
        }
    },
    computed:{
        GetAllItems(){
            return this.$store.state.ListItems
        },
        GetAllItemsFilter(){
            return this.$store.state.ListItemsFilter
        }
    },
    methods:{
        DeleteThisitem(item){
            this.$store.commit('DeleteItem', item)
        },

        CheckThisitem( item){
            this.$store.commit('CheckItem', item)
            // console.log( index, item)
        },
        CheckOffThisitem(item){
            this.$store.commit('CheckItemOff', item)
        },

        ThisImportant(item){
            this.$store.commit('ImportantItem', item)
        },
        ThisImportantOff(item){
            this.$store.commit('ImportantItemOff', item)
        }
    },
    beforeMount() {
        this.$store.commit('initialiseListItems')
    },  
}

</script>


<style lang="scss" scoped>
.list{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    position: relative;
    &-item{
        display: flex;
        justify-content: center;
    }
}
.item{
    position: relative;
    padding: 10px 20px 10px 50px;
    border: 1px solid;
    width: 50%;
    margin: 5px 0;
    transition: 0.1s all;
    &-data{
        position: absolute;
        right: 35px;
        top: 7px;
        font-size: 12px;
    }
    &:hover{
        box-shadow: 2px 1px 3px  #9b9a9a;
    }
}
.delete{
    position: absolute;
    right: 5px;
    top: 5px;    
}
.check{
    position: absolute;
    width: 30px;
    right: 90%;
    top: 50%;
    transform: translateY(-50%);
    animation: fadeUp 1 0.2s ease;
    &-off{
        position: absolute;
    }
}

.important{
    position: absolute;
    width: 8px;
    font-size: 19px;
    right: 94%;
    top: 50%;
    transform: translateY(-50%);
    animation: fadeUp 1 0.2s ease;
    i{
        &::before{
            color: #ff5500;
        }
    }
    &-off{
        position: absolute;
        width: 8px;
        font-size: 19px;
        right: 94%;
        top: 50%;
        transform: translateY(-50%);
        animation: fadeUp 1 0.2s ease;
        i{
        &::before{
            color: #7064c7;
            }
        }
        &:focus{
            box-shadow: none;
        }
    }
    &:focus{
        box-shadow: none;
    }
    
}

@keyframes fadeUp {
    0% { 
        font-size: 10px;
        opacity: 0.5;
    }
    100%{
        font-size: 16px;
        opacity: 1;
    }
}

.green{
    background-color: aquamarine;
    text-decoration: line-through;
    transition: 0.3s;
}   


</style>