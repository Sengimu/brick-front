<template>
    <div style="margin-top: 20px;margin-bottom: 20px">
        <el-row>
            <el-col :span="22" :offset="1">
                <el-card>
                    <el-row>
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item :to="{ path: `/` }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: `/console/profiles` }">控制台</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.el-card {
    text-align: left;
    height: 160px;
    border-radius: 4px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.08)
}
</style>