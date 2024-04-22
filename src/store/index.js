import { createStore } from 'vuex';

export default createStore({
  state: {
    sortedList: false,
    importantFilter: false,
    ListItems:[
      {
        id: 0,
        text: "Let's start with this ",
        check:  null,
        dateCreate: '2.1.2023',
        important: null,
      }
    ],
    ListItemsFilter:[
      /* empty */
    ],
    DataToSorted: [],
    dates: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    // months: 
    // [
    //     'January', 'February', 'March', 
    //     'April', 'May', 'June', 'July', 'August', 
    //     'September', 'October', 'November',
    //     'December'
    // ],
    months: [
      {
        id: 1,
        name: 'January'
      },
      {
        id: 2,
        name: 'February'
      },
      {
        id: 3,
        name: 'March'
      },
      {
        id: 4,
        name: 'April'
      },
      {
        id: 5,
        name: 'May'
      },
      {
        id: 6,
        name: 'June'
      },
      {
        id: 7,
        name: 'July'
      },
      {
        id: 8,
        name: 'August'
      },
      {
        id: 9,
        name: 'September'
      },
      {
        id: 10,
        name: 'October'
      },
      {
        id: 11,
        name: 'November'
      },
      {
        id: 12,
        name: 'December'
      },
    ],
    years: [2023,2024,2025,2026,2027,2028,2029,2030],
  },
  getters: {
    doneTodosCount(state ){
      let arr;
      arr = state.ListItems.filter( i => i = (i.check === true )).length;
      return arr;
    },
    howManyImportant(state){
      let arr;
      arr = state.ListItems.filter( i => i = (i.important === true )).length;
      return arr;
    },
    sortedItemsForId(state){
      if(state.sortedList === true && state.importantFilter === false){
        console.log('3333')
        return [...state.ListItems].sort((a, b) => b.id - a.id);
      }
      if(state.sortedList === true && state.importantFilter === true ){
        console.log('13213')
        return [...state.ListItemsFilter].sort((a, b) => b.id - a.id);
      }
    },
    filterToDate(state){
      let arr;
      let data 
      // console.log(state.DataToSorted[1] )
      (state.DataToSorted[1] == 'January') ? data = state.DataToSorted[0] + '.' + 1 + '.' + state.DataToSorted[2]: false;
      (state.DataToSorted[1] == 'February') ? data = state.DataToSorted[0] + '.' + 2 + '.' +  state.DataToSorted[2] : false;
      (state.DataToSorted[1] == 'March') ? data = state.DataToSorted[0] + '.' + 3 + '.' +  state.DataToSorted[2] : false ;
      (state.DataToSorted[1] == 'April') ? data = state.DataToSorted[0] + '.' + 4 + '.' +  state.DataToSorted[2] : false;
      (state.DataToSorted[1] == 'May') ? data = state.DataToSorted[0] + '.' + 5 + '.' +  state.DataToSorted[2] : false;
      (state.DataToSorted[1] == 'June') ? data = state.DataToSorted[0] + '.' + 6 + '.' +  state.DataToSorted[2] : false;
      (state.DataToSorted[1] == 'July') ? data = state.DataToSorted[0] + '.' + 7 + '.' +  state.DataToSorted[2] : false;
      (state.DataToSorted[1] == 'August') ? data = state.DataToSorted[0] + '.' + 8 + '.' +  state.DataToSorted[2] : false;
      (state.DataToSorted[1] == 'September') ? data = state.DataToSorted[0] + '.' + 9 + '.' +  state.DataToSorted[2] : false;
      (state.DataToSorted[1] == 'October') ? data = state.DataToSorted[0] + '.' + 10 + '.' +  state.DataToSorted[2] : false;
      (state.DataToSorted[1] == 'November') ? data = state.DataToSorted[0] + '.' + 11 + '.' +  state.DataToSorted[2] : false;
      (state.DataToSorted[1] == 'December') ? data = state.DataToSorted[0] + '.' + 12 + '.' +  state.DataToSorted[2] : false;

      console.log(data + ' DATA CREATE')
      arr = state.ListItems.filter( i => i.dateCreate == data) ;
      console.log(arr)
      return arr;
    }

  },
  mutations: {

    NewItem(state, note){
      state.ListItems.push(note);
    },

    DeleteItem(state, item){
      state.ListItems = state.ListItems.filter(i => i.id != item.id);
      state.ListItemsFilter = state.ListItemsFilter.filter(i => i.id != item.id);

      console.log(item.id);
    },

    /* check change */
    CheckItem(state, item ){
      console.log(item.id)
      state.ListItems.map(i => {
        if( item.id == i.id && i.check === false) ( 
          i.check = true
        );
      });
    },
    CheckItemOff(state, item ){
      console.log(item.id)
      state.ListItems.map(i => {
        if( item.id == i.id && i.check === true) ( 
          i.check = false
        );
      });
    },

    /* important change */
    ImportantItem(state, item ){
      console.log(item.id, item.important)
      state.ListItems.map(i => {

        if( item.id == i.id && i.important === false) ( 
          i.important = true
        );

      });
    },
    ImportantItemOff(state, item ){
      state.ListItems.map(i => {
        if( item.id == i.id && i.important === true) ( 
          i.important = false
        );
      });
    },
    changeImportantFilter(state, change){
      state.importantFilter = change
    },

    // search
    SearchItemsInput(state, itemSearch ){
      /* state */
      console.log(itemSearch)
      state.ListItemsFilter = state.ListItems.filter(i => {
        if(itemSearch && i.text == itemSearch){
          return state.ListItemsFilter
        }

      });
    },
    closeFilterItem(state){
      state.ListItemsFilter = []
    },


    // important sort
    OnlyImportantShow(state, check ){
      /* state */
      state.ListItemsFilter = state.ListItems.filter(i => {
        if(check === true && i.important== check){
          return state.ListItemsFilter           
        }

      });
    },


    // sorting
    sortedItems(state){
      state.sortedList = !state.sortedList
    },

    ////////////
    sortedItemsToDate(state, date){
      (date !== 0 && date) ? state.DataToSorted[0] = date : false ;
      console.log(state.DataToSorted)
    },
    sortedItemsToMonth(state, month){
      (month !== 0 && month) ? state.DataToSorted[1] = month : false;
      console.log(state.DataToSorted)
    },
    sortedItemsToYears(state, year){
      (year !== 0 && year) ? state.DataToSorted[2] = year : false;
      console.log(state.DataToSorted)
    },
    resetDataToSorted(state){
      state.DataToSorted = []
    },


    ////proverka Localhost
    initialiseListItems(state) {
      if (localStorage.getItem('ListTodo')) {
        state.ListItems = JSON.parse(localStorage.ListTodo)
      }
      // if (localStorage.getItem('FilterDate')) {
      //   state.ListItems = JSON.parse(localStorage.FilterDate)
      // }
      if(localStorage.getItem('FilterDate')){
        state.DataToSorted = JSON.parse(localStorage.FilterDate)
      }
  },
    
  },
  actions: {
  },
  modules: {
  }
});