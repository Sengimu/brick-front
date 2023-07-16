<template>
    <div>

        <el-container>

            <el-header>

                <BrickHeader></BrickHeader>

            </el-header>

            <el-main style="position: absolute;left: 0;top: 60px;right: 0;bottom: 0;overflow-y: scroll">

                <router-view></router-view>

            </el-main>

        </el-container>

    </div>
</template>

<script>
import BrickHeader from "@/views/BrickFrame/BrickHeader.vue";

export default {
    components: {
        BrickHeader
    }
}
</script>

<style scoped>
.el-header, .el-footer {
    margin: 0;
    border: 0;
    padding: 0;
    font-family: "Microsoft YaHei", sans-serif;
    font-weight: 600;
    text-align: center;
    z-index: 10;
}

.el-main {
    margin: 0;
    border: 0;
    padding: 0;
    font-family: "SHS_SC_Normal", sans-serif;
    font-weight: 1200;
    text-align: center;
}
</style>
