import { createStore } from 'vuex';

export default createStore({
  state: {
    themeBack: 3,
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
      },
      {
        id: 1,
        text: "А это пример просроченной задачи о_О",
        check:  false,
        dateCreate: '3.1.2023',
        important: true,
        mustDone: '09.12.2024',
        mustDoneparse: '2024-12-09',
        showDataCreated: false
      },
      {
        id: 2,
        text: "Это тут для примера выполненой задачи, удали или измени:) ",
        check:  true,
        dateCreate: '3.1.2023',
        important: true,
        mustDone: '09.12.2024',
        mustDoneparse: '2024-12-09',
        showDataCreated: false
      }
    ],
    ListItemsFilter:[
      /* empty */
    ],
    DataToSorted: "",
    Filter: [],
    dates: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],

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
    setting: false,
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
    },
    backgroundsOne(){
      return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23f0f8ff' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E")`
    },
    backgroundsTwo(){
      return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='16' viewBox='0 0 20 16'%3E%3Cg fill='%2392a8ac' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 .04C2.6.22 4.99 1.1 7 2.5A13.94 13.94 0 0 1 15 0h4c.34 0 .67.01 1 .04v2A12 12 0 0 0 7.17 12h5.12A7 7 0 0 1 20 7.07V14a5 5 0 0 0-3-4.58A5 5 0 0 0 14 14H0V7.07c.86.12 1.67.4 2.4.81.75-1.52 1.76-2.9 2.98-4.05C3.79 2.83 1.96 2.2 0 2.04v-2z'/%3E%3C/g%3E%3C/svg%3E")`
    },
    backgroundsThree(){
      return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E")`
    },
    backgrounds(state){
      if(state.themeBack === 1){
        return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23f0f8ff' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E")`
      }
      if(state.themeBack === 2){
        return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='16' viewBox='0 0 20 16'%3E%3Cg fill='%2392a8ac' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 .04C2.6.22 4.99 1.1 7 2.5A13.94 13.94 0 0 1 15 0h4c.34 0 .67.01 1 .04v2A12 12 0 0 0 7.17 12h5.12A7 7 0 0 1 20 7.07V14a5 5 0 0 0-3-4.58A5 5 0 0 0 14 14H0V7.07c.86.12 1.67.4 2.4.81.75-1.52 1.76-2.9 2.98-4.05C3.79 2.83 1.96 2.2 0 2.04v-2z'/%3E%3C/g%3E%3C/svg%3E")`
      }
      if(state.themeBack === 3){
        return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E")`
      }
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
    
    ///////////////////Editig Text items
    editItem(state, item){
      console.log( 'this in vuex:');
      state.ListItems.forEach((i, index) => {
        if(i.id === item.id){
          state.ListItems[index].text = item.text;
          console.log(state.ListItems[index]);
        }
      });      
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
    settingMenuChange(state){
      state.setting = !state.setting
    },
    settingMenuClose(state){
      state.setting = false
    },
    changeThmeme(state, number){
      state.themeBack = number
    },




    ////proverka Localhost
    initialiseListItems(state) {
      if (localStorage.getItem('ListTodo')) {
        state.ListItems = JSON.parse(localStorage.ListTodo)
      }
      if(localStorage.getItem('FilterDate')){
        state.DataToSorted = JSON.parse(localStorage.FilterDate)
      }
      if(localStorage.getItem('ThemeNumber')){
        state.themeBack = JSON.parse(localStorage.ThemeNumber)
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