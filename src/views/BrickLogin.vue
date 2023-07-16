<template>
    <div style="text-align:center;margin-top: 150px">
        <el-row>

            <el-col :span="6" :offset="9">

                <el-card header="登录">

                    <el-form ref="loginForm" :model="loginForm" label-width="80px">
                        <el-form-item label="邮箱">
                            <el-input v-model="loginForm.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input v-model="loginForm.password" show-password></el-input>
                        </el-form-item>
                        <el-form-item label="验证码">
                            <el-row>
                                <el-col :span="12">
                                    <el-input v-model="loginForm.verifyCode"></el-input>
                                </el-col>
                                <el-col :span="10" :offset="2" style="text-align: right">
                                    <img :src="`data:image/png;base64,` + verifyCodeBase64String"
                                         @click="getVerifyCode"/>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item style="text-align: left">
                            <el-button type="primary" @click="login">登录</el-button>
                            <el-button @click="$router.push({path:`/register`})">去注册</el-button>
                        </el-form-item>
                    </el-form>

                </el-card>

            </el-col>

        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                username: "",
                password: "",
                verifyCode: ""
            },
            verifyCodeBase64String: ""
        }
    },
    created() {
        this.checkLogin()
        this.getVerifyCode()
    },
    methods: {
        checkLogin() {
            let that = this
            this.$axios.get("/web/user/checkLogin")
                .then(resp => {
                    if (resp.data.code === 1) {
                        that.$router.push({path: "/console"})
                    }
                })
        },
        getVerifyCode() {
            let that = this
            this.$axios.get("/web/user/getVerifyCode")
                .then(resp => {
                    if (resp.data.code === 1) {
                        that.verifyCodeBase64String = resp.data.data.verifyCodeBase64String
                    }
                })
        },
        login() {
            let that = this
            this.$axios.post("/web/user/login", that.loginForm)
                .then(resp => {
                    if (resp.data.code === 1) {
                        that.$store.commit("user/xSetUser", resp.data.data)
                        that.getTextureHead()
                        that.$router.push({path: "/console"})
                        that.$message.success(resp.data.msg)
                    } else {
                        that.$message.error(resp.data.msg)
                    }
                })
        },
        getTextureHead() {
            let that = this
            let id = that.$store.state.user.id
            this.$axios.get("/web/profile/getHeadById/" + id)
                .then(resp => {
                    if (resp.data.code === 1) {
                        that.$store.commit("user/xSetHead", resp.data.data.headBase64Str)
                    }
                })
        }
    }
}
</script>

<style scoped>

</style>