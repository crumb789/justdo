<template>
    <div class="list-item" v-for="item in GetSortedItems" :key="item.id">
        <div class="item box" 
        :class="{green: item.check, orange: item.important, mix: item.check && item.important, 
            alert: checkToday > Date.parse(item.mustDoneparse) && !item.check, itemDark: whatTheme,
            orangeDark: whatTheme && item.important, mixDark: whatTheme && item.check }" 
            @mouseenter="deleteButton = item.id, editBtn = item.id, newText = item.text"             
            @mouseleave="deleteButton = false, rotateBtn = false, editBtn = false, editingItem = false, newText= '' ">
                
                <div class="buttonsbox" v-if="!editingItem"
                    :class="{activeBtns: deleteButton === item.id && item.id != 0, buttonsboxIsDark: whatTheme}">
                    <!-- done check -->
                    <button v-if="!item.check && item.check !== null" title="This is done"
                        class="check button is-ghost" @click="CheckThisitem(item)">
                        <i class="bi bi-check2"></i>
                    </button>
                    <button v-if="item.check  && item.check !== null" title="Back to work"
                        class="check check-off button is-ghost" @click="CheckOffThisitem(item)">
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
                </div>

                    <!-- content -->
                <p>
                    <span :class="{hiddin: editingItem && editBtn === item.id}">
                        {{ item.text }} 
                    </span>
                    <!-- open editig -->
                    <i v-if="editBtn === item.id && item.check == false && !editingItem" @click="editThisItem"
                        class="bi bi-pencil edit edit-pen">
                    </i>
                </p>
                <form v-if="editBtn === item.id && editingItem" @submit.prevent="changeTextInItem(item)">
                    <input :value="item.text" class="edit edit-input input is-info"
                        @input="event => newText = event.target.value" >
                        <!-- close editig -->
                    <i v-if="editBtn === item.id && item.check == false && editingItem" @click="editThisItem"
                        class="bi bi-pencil edit edit-pen edit-pen_active"
                        title="close editig">
                    </i>
                        <!-- done editing -->
                    <i v-if="editBtn === item.id && item.check == false && editingItem" @click="changeTextInItem(item)"
                        class="bi bi-check2-all edit edit-pen edit-pen_done"
                        title="cdone editing">
                    </i>
                </form>

            <!-- delete btns    -->
            <button  v-if="deleteButton === item.id && !editingItem" title="Delete it?"
                class="delete" @click="DeleteThisitem(item)">
            </button>   
                    <!-- DATA MUST DONE -->
            <div v-if="deleteButton === item.id && item.mustDone && rotateBtn && !editingItem"
                class="item-data animate__animated animate__flipInY">must done: {{ item.mustDone }} 
                <i  @click="rotateBtnActivated" class="bi bi-arrow-repeat rotate" ></i>
                <!-- {{ item.dateCreate }} -->
            </div>
                    <!-- DATA CREATED -->
            <div v-if="deleteButton === item.id && item.dateCreate && !rotateBtn && !editingItem"
                class="item-data animate__animated animate__flipInY">created: {{ item.dateCreate }} 
                <i v-if="item.mustDone" @click="rotateBtnActivated" class="bi bi-arrow-repeat rotate" ></i>
                <!-- {{ item.dateCreate }} -->
            </div>        
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return{
            deleteButton: false,
            rotateBtn: false,
            editBtn: false,
            editingItem: false,
            newText: ''
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
        },
        rotateBtnActivated(){
            this.rotateBtn = !this.rotateBtn
        },
        editThisItem(){
            this.editingItem = !this.editingItem
            this.newText = ''
            // console.log('edit btn:', this.editingItem)
        },
        changeTextInItem(item){
            console.log('This code must be change items')
            // console.log(this.newText, item);
            let now = `${new Date().getDate()}.${new Date().getMonth() + 1}.${ new Date().getFullYear() }`

            let editNote = {   
                    id: item.id,
                    text: this.newText,
                    check: false ,
                    dateCreate: now,
                    important: item.important,
                    mustDone: item.mustDone,
                    mustDoneparse:  item.mustDoneparse
                }
                // console.log(editNote)

            this.$store.commit('editItem', editNote)

            this.editBtn = false
            this.editingItem= false
            this.newText = ''
        },
    },
    computed:{
        GetSortedItems(){
            return this.$store.getters.sortedItemsForId
        },
        checkToday(){
            return Date.parse(this.$store.getters.today)
        },
        whatTheme(){
            return this.$store.state.themeIsDark
        },
    }
}
</script>

<style lang="scss" >
.rotate{
    font-size: 15px;
    cursor: pointer;
}
.edit{
    &-pen{
        position: absolute;
        left: 11px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        &_active{
            color: #dd2929;
            animation: shake 1s infinite ease ; 
            animation-delay: 0.5s;
        }
        &_done{
            left: 96%;
            font-size: 18px;
            color: #4da87f;
        }
    }
    &-input{
        position: absolute;
        width: 80%;
        height: 80%;
        top: 0;
        right: 50%;
        transform: translate(50%, 5px);
        font-size: 14px;
    }
}

@keyframes shake{
    0%{
        rotate: 5deg;
    }
    25%{
        rotate: 0deg;
    }
    50%{
        rotate: -5deg;
    }
    75%{
        rotate: 0deg;
    }
    100%{
        rotate: 0deg;
    }
}

@media(max-width: 425px){
    .edit{
        &-pen{
            left: 6px;
            &_done{
                left: 92%;
            }
        }
    }
}
</style>