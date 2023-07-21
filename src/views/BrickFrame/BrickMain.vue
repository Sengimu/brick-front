<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-carousel :height="carouselHeight+'px'">
                    <el-carousel-item v-for="item in bgUrls" :key="item">
                        <el-image :src="item">
                        </el-image>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            carouselHeight: 0,

            bgUrls: this.$store.state.webInfo.bgUrls,
        }
    },
    created() {
        this.initScreenSize()
    },
    methods: {
        initScreenSize() {
            this.carouselHeight = this.getCarouselHeight()
            window.onresize = () => {
                this.carouselHeight = this.getCarouselHeight()
            }
        },
        getCarouselHeight() {
            let carouselHeight = window.innerWidth * 822 / 1920
            if (carouselHeight > 822) {
                carouselHeight = 822
            }
            return carouselHeight
        }
    }
}
</script>

<style scoped>

</style>