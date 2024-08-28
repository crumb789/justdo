import { createStore } from 'vuex';

export default createStore({
  state: {
    sortedList: true,
    importantFilter: false,
    ListItems:[
      {
        id: 0,
        text: "Let's start with this ",
        check:  null,
        dateCreate: '2.1.2023',
        important: null,
        mustDone: null,
        mustDoneparse: null,
        showDataCreated: false
      }
    ],
    ListItemsFilter:[
      /* empty */
    ],
    DataToSorted: "",
    Filter: [],
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
    modalWindow: true,
  },
  getters: {
    today(){
      return `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${ new Date().getDate() }`
    },
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
        
        return [...state.ListItems].sort((a, b) => b.id - a.id);
      }
      if(state.sortedList === true && state.importantFilter === true ){
        
        return [...state.ListItemsFilter].sort((a, b) => b.id - a.id);
      }
    },
    filterToDate(state){
      state.Filter = state.ListItems.filter( i => i.mustDone == state.DataToSorted) ;
      console.log(state.Filter)
      return state.Filter
    }

  },
  mutations: {

    NewItem(state, note){
      state.ListItems.push(note);
    },

    DeleteItem(state, item){
      state.ListItems = state.ListItems.filter(i => i.id != item.id);
      state.ListItemsFilter = state.ListItemsFilter.filter(i => i.id != item.id);

      
    },

    /* check change */
    CheckItem(state, item ){
      
      state.ListItems.map(i => {
        if( item.id == i.id && i.check === false) ( 
          i.check = true
        );
      });
    },
    CheckItemOff(state, item ){
      state.ListItems.map(i => {
        if( item.id == i.id && i.check === true) ( 
          i.check = false
        );
      });
    },

    /* important change */
    ImportantItem(state, item ){
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


    // important sort
    OnlyImportantShow(state, check ){
      /* state */
      state.ListItemsFilter = state.ListItems.filter(i => {
        if(check === true && i.important== check){
          return state.ListItemsFilter           
        }

      });
    },

    /////close Filter
    closeFilterItem(state){
      state.ListItemsFilter = []
    },


    // sorting
    sortedItems(state){
      state.sortedList = !state.sortedList
    },

    ////////////
    calendarMustDone(state, date){
      state.DataToSorted = date
      state.DataToSorted = state.DataToSorted.split('-').reverse()
      // удаляем нули перед цифрами для нужной формы
      // if(state.DataToSorted[0] <= 9 ){
      //   console.log(state.DataToSorted[0])
      //   state.DataToSorted[0] = state.DataToSorted[0].replace('0', '')
      // }
      // if(state.DataToSorted[1] <= 9 ){
      //   console.log(state.DataToSorted[1])
      //   state.DataToSorted[1] = state.DataToSorted[1].replace('0', '')
      // }

      state.DataToSorted = state.DataToSorted.join('.')
      console.log(state.DataToSorted)
    },


    sortedItemsToDate(state, date){
      (date !== 0 && date) ? state.DataToSorted[0] = date : false ;
    },
    sortedItemsToMonth(state, month){
      (month !== 0 && month) ? state.DataToSorted[1] = month : false;
    },
    sortedItemsToYears(state, year){
      (year !== 0 && year) ? state.DataToSorted[2] = year : false;
    },
    resetDataToSorted(state){
      state.DataToSorted = []
    },
    modalClose(state){
      state.modalWindow = false
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

      if(sessionStorage.getItem('modalWindow')){
        state.modalWindow = JSON.parse(sessionStorage.modalWindow)
      }      
  },
    
  },
  actions: {
  },
  modules: {
  }
});