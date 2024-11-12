<template>
    <div class="list">
        <check-important v-if="!actualDateForItems && ifSorted"></check-important>

        <!-- ИНПУТ ДАТЫ -->
        <!-- <date-filter v-if="GetAllItemsFilter.length < 1"></date-filter>                 -->
        <date-filter-second v-if="!importantFilterTrue && GetAllItems.length > 1"></date-filter-second>
        
        <select-filter v-if="GetAllItems.length > 1 && !importantFilterTrue && !ifDataFilter">
        </select-filter>

<!-- <main-list-items v-if="GetAllItemsFilter.length < 1 && !ifSorted && ifDataFilter < 2"></main-list-items> -->
        <main-list-items v-if="GetAllItemsFilter.length < 1 && !ifSorted && !ifDataFilter"></main-list-items>
        <list-items-filter-date v-if="ifDataFilter"></list-items-filter-date>

<!-- list sorted for id -  -->
        <list-sorted-for-id v-if="ifSorted && GetAllItemsFilter.length < 1 && !ifDataFilter" ></list-sorted-for-id>

<!-- list filter for important-  -->        
        <important-list-items v-if="GetAllItemsFilter"></important-list-items>


<!-- placeholders -->
        <placeholder-items-empty ></placeholder-items-empty>

        <placeholder-empty-date-filter v-if="ifDataFilter > 0 && getFilterLength < 1"></placeholder-empty-date-filter>

    </div>
</template>

<script>
import SelectFilter from './SelectFilter.vue'
import CheckImportant from './CheckImportant.vue'
import ListItemsFilterDate from './ListItemsFilterDate.vue'
import PlaceholderItemsEmpty from './PlaceholderItemsEmpty.vue'
import MainListItems from './MainListItems.vue'
import ListSortedForId from './ListSortedForId.vue'
import ImportantListItems from './ImportantListItems.vue'
import DateFilterSecond from './DateFilterSecond.vue'
import PlaceholderEmptyDateFilter from './PlaceholderEmptyDateFilter.vue'

export default {
    components: {
        SelectFilter,
        CheckImportant,
        ListItemsFilterDate,
        PlaceholderItemsEmpty,
        MainListItems,
        ListSortedForId,
        ImportantListItems,
        DateFilterSecond,
        PlaceholderEmptyDateFilter,
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
        getFilterLength(){
            return this.$store.state.Filter.length
        },
        checkToday(){
            return Date.parse(this.$store.getters.today)
        },
        checkFilterItemsToDate(){
            return this.$store.getters.filterToDate.length
        },
        actualDateForItems(){
            return this.$store.state.DataToSorted.length
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
    // beforeMount() {
    //     this.$store.commit('initialiseListItems')
    //     // this.$store.commit('initialiseSortedList')
    // },  
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
    padding: 10px 20px 10px 20px;
    border: 1px solid;
    width: 50%;
    margin: 5px 0;
    transition: 0.1s all;
    animation: fadeUpFast 1 0.6s ease-in;
    &-data{
        position: absolute;
        right: 35px;
        top: -14px;
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

.buttonsbox{
    border: 1px solid #bbb9b7;
    // background: #fff;
    position: absolute;
    width: 70px;
    height: 44px;
    top: 0;
    left:  30px;
    display: flex;
    flex-direction: row-reverse;
    border-radius: 5px;
    box-shadow: -3px -3px 9px #d1d1d1;
    opacity: 0;
    transition: 0.3s all;
    button{
        height: 100%;
    }
}
.activeBtns{
    left: -73px;
    opacity: 1;
}

.delete{
    position: absolute;
    right: 5px;
    top: 5px;    
}
.check{
    width: 50%;
    animation: fadeUp 1 0.1s ease;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 1px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    &-off{
        // background: #00800021 !important;
        box-shadow: rgb(204, 219, 232) 2px 2px 4px 0px inset, rgba(255, 255, 255, 0.5) -2px -2px 4px 1px inset;
        i{
            &::before{
                color: #08a75d;
            }
        }
    }
}

.important{
    width: 50%;
    animation: fadeUp 1 0.1s ease;
    box-shadow: rgb(204, 219, 232) 2px 2px 4px 0px inset, rgba(255, 255, 255, 0.5) -2px -2px 4px 1px inset;
    i{
        &::before{
            color: #ff5500;
        }
    }
    &-off{
        width: 50%;
        animation: fadeUp 1 0.2s ease;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
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
    border-left: 1px solid #006b47;
    border-top: 1px solid #006b47;
    border-right: 3px solid #006b47;
    border-bottom: 1px solid #006b47;
    transition: 0.2s;
    p{
        opacity: 0.7;
    }
} 

.orange{
    background-color: #f69e545c;
    // border-color: rgb(150, 2, 2);
    border-left: 1px solid #96020275;
    border-top: 1px solid #96020275;
    border-right: 3px solid #96020275;
    border-bottom: 1px solid #96020275;
    transform: 0.2s all;
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
    border-left: 1px solid #e56700;
    border-top: 1px solid #e56700;
    border-right: 3px solid #e56700;
    border-bottom: 1px solid #e56700;
    font-weight: 500;   
}

.hiddin{
    opacity: 0;
}

@media(max-width:1024px){
    .item{
        width: 70%;
    }
}
@media(max-width:768px){
    .list{
        margin: 65px 0px 60px 0px;
        
        &-item{
            &:nth-child(0){
                margin-top: 6px !important; 
            }
        }
    }
    .item{
        width: 75%;
    }
}
@media(max-width:425px){
    .item{
        width: 92%;
        &:hover{
            width: 96%;
            margin: 30px 0 30px 0;
            box-shadow: 4px 4px 3px #9b9a9a;
            height: 50px;
        }
        &-data{
            top: -16px;
        }
    }
    .activeBtns{
        border-radius: 6px 2px 2px 6px;
        left: 1px;
        opacity: 1;
        z-index: 100;
    }
    .buttonsbox{
        top: -30px;
        height: 36px;
        left: 8px;
        border: none;
        border-radius: 4px;
        box-shadow: none;
        background-color: #f0f8ff;
    }
    .check{
        border-radius: 4px;
    }
    .important{  
        border-radius: 4px;
    }
}
</style>
