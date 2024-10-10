<template>



    <!-- в хом вью компоненте лежит тутор пайдж, либо доделай, либо удали -->
    <div class="tuturial tutorial-page">
        <img :src="imageOne" alt="imageOne">
    </div>
</template>

<script>
import imageOne from "@/assets/tutor/tutor-image-1.png"


export default {
    data() {
        return{
            imageOne,
        }
    },
}
</script>


<style lang="scss" scoped>
.tuturial{
    position: absolute;
}
</style>