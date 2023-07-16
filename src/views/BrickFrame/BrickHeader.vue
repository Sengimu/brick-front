<template>
    <div>
        <el-menu style="border-bottom: none;" :default-active="this.$route.path" mode="horizontal" router>
            <el-row>
                <el-col :span="2" :offset="2" style="text-align: left;">
                    <el-link href="/" :underline="false" style="left: 3px;">
                        <el-image
                            style="width: 120px;height: 21px;margin-top: 17px"
                            :src="$store.state.webInfo.logoUrl">
                        </el-image>
                    </el-link>
                </el-col>
                <el-col :span="2" :offset="16">
                    <el-menu-item index="/login">
                        <span v-if="$store.state.user.headBase64Str === ``">登录</span>
                        <img v-else :src="`data:image/png;base64,` + $store.state.user.headBase64Str"/>
                    </el-menu-item>
                </el-col>
            </el-row>
        </el-menu>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>