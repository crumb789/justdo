<template>
    <div class="select select-filter-date is-small is-rounded" v-if="howManyItems > 0">

        <!--  btn-calendar -->
        <span  v-if="showBtnDataChoise" @click="showBtnDataChoise = false" class="data-show data-box" title="filter by completion date">
            <i class="bi bi-calendar3"></i>
        </span> 


        <form v-if="!showBtnDataChoise">
            <input type="date" class="input input-date is-info is-small" id="date" :class="{darkBackColor: whatTheme}"
            v-model="dataSelect" @change="changeSortedDate">
        </form>

        <!-- btn-reset -->
        <span v-if="!showBtnDataChoise"  
            @click="resetDataToSorted" class="data-reset data-box" 
            title="reset date?" :class="{darkBackColor: whatTheme}" >
            <i class="bi bi-x-circle-fill"></i>
        </span> 
    </div>
</template>

<script>
export default {
    data() {
        return{
            dataSelect: '',
            showBtnDataChoise: true
        }
    },
    methods:{
        changeSortedDate(){
            // this.$store.commit('sortedItemsToDate', this.selectedDate)
            this.$store.commit('calendarMustDone', this.dataSelect) 
        },
        changeSortedMonths(){
            this.$store.commit('sortedItemsToMonth', this.selectedMonth )
        },
        changeSortedYears(){
            this.$store.commit('sortedItemsToYears', this.selectedYear)
        },
        resetDataToSorted(){
            this.$store.commit('resetDataToSorted')
            this.$store.commit('calendarMustDone', '')
            this.dataSelect = ''
            this.showBtnDataChoise = true

        }
    },
    computed:{
        howManyItems(){
            return this.$store.state.ListItems.length
        },
        datesGetters(){
            return this.$store.state.dates
        },
        monthsGetters(){
            return this.$store.state.months
        },
        yearsGetters(){
            return this.$store.state.years
        },
        ifNeedResetdata(){
            return this.$store.state.DataToSorted.length
        },
        whatTheme(){
            return this.$store.state.themeIsDark
        },
    }
}
</script>




<style lang="scss" >
.select{
    &-filter{
        &-date{
            position: absolute;
            display: flex;
            top: -33px;
            right: 31.5%;
            justify-content: space-around;
            align-items: center;
            ///min-width: 255px;
        }
    }
}

.data{
    position: absolute;
    &-show{
        cursor: pointer;
        right: 0%;
    }
    &-reset{
        cursor: pointer;
        position: absolute;
        top: 50%;
        left:  -22px;
        transform: translateY(-50%);
        i{
            position: absolute;
            transform: translateY(-40%);
        }
    }
}
#data{
    width: 300px;
}
.navbar-link:not(.is-arrowless)::after, .select:not(.is-multiple):not(.is-loading)::after{
    content: none;
}
.bi{
    &-calendar3{
        &::before{
            padding: 0px 0px;
            background-color: #eef7ff;
            border-radius: 3px;
        }
    }
}
@media (max-width: 1024px){
    .select{
        &-filter{
            &-date{
                right: 25%;
            }
        }
    }
}

@media (max-width: 768px){
    .select{
        &-filter{
            &-date{
                right: 12.5%;
                top: -70px;
            }
        }
    }
}
</style>