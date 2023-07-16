<template>
    <div style="height: 100%">
        <el-menu style="height: 100%" :default-active="this.$route.path" router>
            <div style="height: 86%">
                <div style="margin-top: 40px">
                    <img :src="`data:image/png;base64,` + $store.state.user.headBase64Str"/>
                </div>
                <div style="margin-top: 20px">
                    {{ $store.state.user.name }}
                </div>
                <el-menu-item index="/console/profiles" style="margin-top: 40px">
                    <i class="el-icon-document"></i>
                    <span slot="title">我的角色</span>
                </el-menu-item>
            </div>

            <div>
                <el-menu-item>
                    <i class="el-icon-document"></i>
                    <span slot="title">退出登录</span>
                </el-menu-item>
            </div>
        </el-menu>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>