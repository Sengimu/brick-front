<template>
    <div>

        <el-container :style="`height:`+$store.state.webInfo.consoleInHeight+`px`">

            <el-aside width="200px">
                <BrickConsoleAside></BrickConsoleAside>
            </el-aside>

            <el-container :style="`height:`+$store.state.webInfo.consoleInHeight+`px`">
                <el-header height="200px">
                    <BrickConsoleHeader></BrickConsoleHeader>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>

        </el-container>

    </div>
</template>

<script>
import BrickConsoleAside from "@/views/BrickConsoleFrame/BrickConsoleAside.vue"
import BrickConsoleHeader from "@/views/BrickConsoleFrame/BrickConsoleHeader.vue";

export default {
    components: {
        BrickConsoleAside,
        BrickConsoleHeader
    },
    created() {
        this.$store.commit("webInfo/xSetConsoleInHeight", window.innerHeight)
        if (this.$store.state.user.id < 1) {
            this.$router.push({path: "/login"})
        }
    }
}
</script>

<style scoped>
.el-aside {
    margin: 0;
    border: 0;
    padding: 0;
    font-family: "Microsoft YaHei", sans-serif;
    font-weight: 600;
    text-align: center;
    z-index: 10;
}

.el-header {
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