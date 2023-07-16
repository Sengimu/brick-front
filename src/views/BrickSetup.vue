<template>
    <div style="text-align:center;margin-top: 150px">

        <div v-if="Visible">

            <el-row>
                <el-col :span="12" :offset="6">
                    <h3>请输入初始化token验证身份</h3>
                    <h3>token已在控制台打印，可直接复制，请在两分钟内使用</h3>
                </el-col>
            </el-row>

            <el-row style="margin-top: 20px">
                <el-col :span="6" :offset="8">
                    <el-input placeholder="输入初始化token" v-model="setupToken" clearable></el-input>
                </el-col>
                <el-col style="text-align: left" :span="2">
                    <el-button style="margin-left: 15px" type="primary" @click="verifySetupToken" plain>验证
                    </el-button>
                </el-col>
            </el-row>

        </div>

        <div v-else>

            <el-row style="margin-top: 100px">
                <el-col :span="12" :offset="6">
                    <h3>初始化成功，请将以下公钥和私钥填入配置文件</h3>
                    <h3 style="color: red">如不填会造成皮肤不显，点输入框全选复制即可</h3>
                </el-col>
            </el-row>

            <el-row style="margin-top: 20px">
                <el-col :span="2" :offset="8" style="margin-top: 4px">
                    <el-tag type="info"><span style="height: 70px;width: 40px">publicKey&nbsp;</span></el-tag>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="publicKey"></el-input>
                </el-col>
            </el-row>

            <el-row style="margin-top: 20px">
                <el-col :span="2" :offset="8" style="margin-top: 4px">
                    <el-tag type="info"><span style="height: 70px;width: 40px">privateKey</span></el-tag>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="privateKey"></el-input>
                </el-col>
            </el-row>

        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            Visible: true,

            setupToken: "",

            publicKey: "",
            privateKey: ""
        }
    },
    created() {
        this.getSetupToken()
    },
    methods: {
        getSetupToken() {
            let that = this;
            this.$axios.get("/web/setup/getSetupToken")
                .then(resp => {
                    if (resp.data.code !== 1) {
                        that.$message.error(resp.data.msg);
                    }
                })
        },
        verifySetupToken() {
            let that = this;
            this.$axios.post("/web/setup/verifySetupToken", {setupToken: that.setupToken})
                .then(resp => {
                    if (resp.data.code === 1) {
                        that.$message.success(resp.data.msg);
                        that.Visible = false;
                        that.publicKey = resp.data.data.publicKey;
                        that.privateKey = resp.data.data.privateKey;
                    } else {
                        that.$message.error(resp.data.msg);
                    }
                })
        }
    }
}
</script>

<style scoped>

</style>