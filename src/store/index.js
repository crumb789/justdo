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
        return [...state.ListItems].sort((a, b) => b.id - a.id)
      }
      if(state.sortedList === true && state.importantFilter === true ){
        console.log('13213')
        return [...state.ListItemsFilter].sort((a, b) => b.id - a.id)
      }
    },

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


    ////proverka Localhost
    initialiseListItems(state) {
      if (localStorage.getItem('ListTodo')) {
        state.ListItems = JSON.parse(localStorage.ListTodo)
      }
      // if(localStorage.getItem('sortedList')){
      //   state.sortedList = JSON.parse(localStorage.sortedList)
      // }
  },
    
  },
  actions: {
  },
  modules: {
  }
});