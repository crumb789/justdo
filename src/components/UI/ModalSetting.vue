<template>
    <div class="modal" style=" display: block;">
  <div class="modal-background"></div>
  <div class="modal-content">
    <!-- Any other Bulma elements you want -->
  </div>
  <button  @click="closeMenu" class="modal-close is-large" aria-label="close"></button>
</div>
    <div class="setting-box animate__animated animate__fadeInDown animate__faster">
        <ul class="menu">
            <ul class="backgr">Backgrounds:
                <li @click="choiseTheme(number)"
                    v-for="number in themeHWO" :key="number.id" class="backgr_list">
                    {{ number.count }}
                </li>
            </ul>

            <li class="menu_list-delete">Delete all notes</li>
            <!-- <li @click="closeMenu" class="menu_list-close">Close</li> -->
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return{
            themeHWO: [
                {
                    id: 0,
                    count: 1,
                },
                {
                    id: 1,
                    count: 2,
                },
                {
                    id: 2,
                    count: 3,
                },
            ]
        }
    },
    methods:{
        closeMenu(){
            this.$store.commit('settingMenuClose')
        },
        choiseTheme(number){
            this.$store.commit('changeThmeme', number.count)
        }
    }
}
</script>

<style lang="scss">
.setting{
    &-box{
        position: relative;
        top: 0;
        right: 0;
        font-size: 14px;
        width: 280px;
        height: 200px;
        border: 1px solid #000;
        border-radius: 8px;
        z-index: 80;
        background-color: #ffffff;
    }
}
ul{
    &.menu{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    li{
        margin: 5px 0;
        &:hover{
            cursor: pointer;
        }
        &.menu_list{
            &-close{
                font-size: 16px;
                color: rgb(131, 55, 55);
                text-shadow: #000;
                transition: 0.3s all;
                &:hover{
                    text-decoration: 1px #000 wavy underline;
                }
            }
            &-delete{
                border: 1px solid #933737;
                border-left: none;
                border-right: none;
                transition: 0.3s all;
                padding: 4px;
                &:hover{
                    background: #933737;
                    color: #f5bf6e;
                    border-radius: 5px;
                }
            }
        }
        
    }
    &.backgr{
        margin: 22px 0;
        &:hover{
            text-decoration: none !important;
        }
    }
}

</style>