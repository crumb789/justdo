<template>
    <div class="select select-date is-small is-rounded" v-if="howManyItems > 0">

       <!--  btn-calendar -->
        <span  v-if="showBtnDataChoise" @click="showBtnDataChoise = false" class="data-show data-box" title="select a date">
            <i class="bi bi-calendar4-week"></i>
        </span> 

        <select v-if="!showBtnDataChoise" @change="changeSortedDate" v-model="selectedDate">
            <option value="" disabled selected>Day</option>
            <option v-for="(date, index ) in datesGetters" :key="index" > {{ date }} </option>
        </select>
        <select v-if="!showBtnDataChoise"  @change="changeSortedMonths" v-model="selectedMonth">
            <option value="" disabled selected>Month</option>
            <option v-for="(month, index) in monthsGetters" :key="index "> {{ month.name}} </option>
        </select>
        <select v-if="!showBtnDataChoise"  @change="changeSortedYears" v-model="selectedYear">
            <option value="" disabled selected>Year</option>
            <option v-for="(year, index) in yearsGetters" :key="index "> {{ year }} </option>
        </select>      

        <!-- btn-reset -->
        <span v-if="ifNeedResetdata > 0 && !showBtnDataChoise "  @click="resetDataToSorted" class="data-reset data-box" title="reset date?">
            <i class="bi bi-patch-minus-fill"></i>
        </span> 
    </div>
</template>

<script>
export default {
    data() {
        return{
            selectedDate: '',
            selectedMonth: '',
            selectedYear: '',
            showBtnDataChoise: true
        }
    },
    methods:{
        changeSortedDate(){
            this.$store.commit('sortedItemsToDate', this.selectedDate)
        },
        changeSortedMonths(){
            this.$store.commit('sortedItemsToMonth', this.selectedMonth )
        },
        changeSortedYears(){
            this.$store.commit('sortedItemsToYears', this.selectedYear)
        },
        resetDataToSorted(){
            this.$store.commit('resetDataToSorted')
            this.selectedDate = ''
            this.selectedMonth = '' 
            this.selectedYear = ''
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
        }
    }
}
</script>




<style lang="scss" scoped>
.select{
    &-date{
        position: absolute;
        display: flex;
        top: -35px;
        right: 31%;
        justify-content: space-around;
        align-items: center;
        min-width: 255px;
    }
}

.data{
    position: absolute;
    
    &-show{
        cursor: pointer;
        right: -40%;
    }
    &-reset{
        cursor: pointer;
        position: absolute;
        top: 55%;
        left:  -10%;
        transform: translateY(-50%);
    }
}

.navbar-link:not(.is-arrowless)::after, .select:not(.is-multiple):not(.is-loading)::after{
    content: none;
}
</style>