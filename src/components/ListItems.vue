<template>
    <div class="list">
        <check-important></check-important>

        <date-filter></date-filter>                
        <select-filter v-if="GetAllItems.length > 1 && !importantFilterTrue"></select-filter>

        <main-list-items v-if="GetAllItemsFilter.length < 1 && !ifSorted && ifDataFilter < 2"></main-list-items>
        <list-items-filter-date v-if="ifDataFilter > 2"></list-items-filter-date>
<!-- list sorted for id -  -->
        <list-sorted-for-id v-if="ifSorted && GetAllItemsFilter.length < 1 " ></list-sorted-for-id>

<!-- list filter for important-  -->        
        <important-list-items v-if="GetAllItemsFilter"></important-list-items>


<!-- placeholder -->
        <placeholder-items-empty v-if="false"></placeholder-items-empty>

    </div>
</template>

<script>
import SelectFilter from './SelectFilter.vue'
import CheckImportant from './CheckImportant.vue'
import DateFilter from './DateFilter.vue'
import ListItemsFilterDate from './ListItemsFilterDate.vue'
import PlaceholderItemsEmpty from './PlaceholderItemsEmpty.vue'
import MainListItems from './MainListItems.vue'
import ListSortedForId from './ListSortedForId.vue'
import ImportantListItems from './ImportantListItems.vue'

export default {
    components: {
        SelectFilter,
        CheckImportant,
        DateFilter,
        ListItemsFilterDate,
        PlaceholderItemsEmpty,
        MainListItems,
        ListSortedForId,
        ImportantListItems,
    },
    data() {
        return{
            deleteButton: false
        }
    },
    computed:{
        ifSorted(){ 
          return  this.$store.state.sortedList
        },
        GetAllItems(){
            return this.$store.state.ListItems
            // if(!this.$store.getters.sortedList ){
            //     return this.$store.getters.sortedItemsForId
            // }

        },
        GetSortedItems(){
            return this.$store.getters.sortedItemsForId
        },

        GetAllItemsFilter(){
            return this.$store.state.ListItemsFilter
        },
        importantFilterTrue(){
            return this.$store.state.importantFilter
        },
        ifDataFilter(){
            return this.$store.state.DataToSorted.length
        },
        checkToday(){
            return Date.parse(this.$store.getters.today)
        }
    },
    methods:{
        DeleteThisitem(item){
            this.$store.commit('DeleteItem', item)
        },

        CheckThisitem( item){
            this.$store.commit('CheckItem', item)
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
        // this.$store.commit('initialiseSortedList')
    },  
}

</script>


<style lang="scss" >
.list{
    display: flex;
    flex-direction: column;
    margin: 45px 0px 60px 0px;
    position: relative;
    &-item{
        display: flex;
        justify-content: center;
    }
}
.item{
    position: relative;
    padding: 10px 20px 10px 58px;
    border: 1px solid;
    width: 50%;
    margin: 5px 0;
    transition: 0.1s all;
    animation: fadeUpFast 1 0.6s ease-in;
    &-data{
        position: absolute;
        right: 35px;
        top: 7px;
        font-size: 12px;
        border: 1px solid #000;
        border-radius: 3px;
        color: #000;
        background: #ffffff;
        padding: 1px 5px;
        z-index: 2;
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

@keyframes fadeUpFast{
    0% { 
        opacity: 0.1;
    }
    100%{
        opacity: 1;
    }
}

.green{
    background-color: aquamarine;
    text-decoration: line-through;
    transition: 0.3s;
    p{
        opacity: 0.7;
    }
} 

.orange{
    background-color: #f69e545c;
}
.mix{
    background-color: #54f6665c;
    p{
        opacity: 0.8;
    }
}

.alert{
    color: #000;
    background-color: #fd9500b8;   
    font-weight: 500;   
}
</style>