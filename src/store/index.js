
import { createStore } from 'vuex';

export default createStore({
  state: {
    ListItems:[
      {
        id: 0,
        text: 'First Zametka',
        check:  false,
        dateCreate: '2.1.2023',
        important: false,
      }
    ],
    ListItemsFilter:[
      /* empty */
    ]
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
    }
  },
  mutations: {

    NewItem(state, note){
      state.ListItems.push(note);
    },

    DeleteItem(state, item){
      state.ListItems = state.ListItems.filter(i => i.id != item.id);

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
      let arr = state.ListItems;

      arr.sort(function(a, b) { return a.id - b.id; });

      console.log(arr)
      // console.log(state.ListItems)
    },
    sortedItemsBack(state){
      state.ListItems.sort( (a, b) => a - b);
      console.log(state.ListItems)
    },

    ////proverka Localhost
    initialiseListItems(state) {
      if (localStorage.getItem('ListTodo')) {
        state.ListItems = JSON.parse(localStorage.ListTodo)
      }
  }
    
  },
  actions: {
  },
  modules: {
  }
});