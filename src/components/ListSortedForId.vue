<template>
    <div class="list-item" v-for="item in GetSortedItems" :key="item.id">
        <div class="item box" 
        :class="{green: item.check, orange: item.important, mix: item.check && item.important, 
            alert: checkToday > Date.parse(item.mustDoneparse) && !item.check }" 
        @mouseenter="deleteButton = item.id" @mouseleave="deleteButton = false , rotateBtn = false">
                
                <div class="buttonsbox" :class="{activeBtns: deleteButton === item.id && item.id != 0}">
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

                <p>{{ item.text }}</p>

            <!-- delete btns    -->
            <button  v-if="deleteButton === item.id" title="Delete it?"
                class="delete" @click="DeleteThisitem(item)">
            </button>   
                    <!-- DATA MUST DONE -->
            <div v-if="deleteButton === item.id && item.mustDone && rotateBtn"
                class="item-data animate__animated animate__flipInY">must done: {{ item.mustDone }} 
                <i  @click="rotateBtnActivated" class="bi bi-arrow-repeat rotate" ></i>
                <!-- {{ item.dateCreate }} -->
            </div>
                    <!-- DATA CREATED -->
            <div v-if="deleteButton === item.id && item.dateCreate && !rotateBtn "
                class="item-data animate__animated animate__flipInY">creted: {{ item.dateCreate }} 
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
            console.log('rotate!!!', this.rotateBtn)
        }
    },
    computed:{
        GetSortedItems(){
            return this.$store.getters.sortedItemsForId
        },
        checkToday(){
            return Date.parse(this.$store.getters.today)
        }
    }
}
</script>

<style lang="scss" >
.rotate{
    font-size: 15px;
    cursor: pointer;
}
</style>