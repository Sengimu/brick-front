<template>
    <div style="text-align:center;margin-top: 150px">
        <el-row>

            <el-col :span="6" :offset="9">

                <el-card header="注册">

                    <el-form ref="registerForm" :model="registerForm" label-width="80px">
                        <el-form-item label="邮箱">
                            <el-input v-model="registerForm.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input v-model="registerForm.password" show-password></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码">
                            <el-input v-model="registerForm.confirmPassword" show-password></el-input>
                        </el-form-item>
                        <el-form-item label="验证码">
                            <el-row>
                                <el-col :span="12">
                                    <el-input v-model="registerForm.verifyCode"></el-input>
                                </el-col>
                                <el-col :span="10" :offset="2" style="text-align: right">
                                    <img :src="`data:image/png;base64,` + verifyCodeBase64String"
                                         @click="getVerifyCode"/>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item style="text-align: left">
                            <el-button type="primary" @click="register">注册</el-button>
                            <el-button @click="$router.push({path:`/login`})">去登录</el-button>
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
            registerForm: {
                username: "",
                password: "",
                confirmPassword: "",
                verifyCode: ""
            },
            verifyCodeBase64String: ""
        }
    },
    created() {
        this.getVerifyCode()
    },
    methods: {
        getVerifyCode() {
            let that = this;
            this.$axios.get("/web/user/getVerifyCode")
                .then(resp => {
                    if (resp.data.code === 1) {
                        that.verifyCodeBase64String = resp.data.data.verifyCodeBase64String;
                    } else {
                        that.$message.error(resp.data.msg);
                    }
                })
        },
        register() {
            let that = this;
            this.$axios.post("/web/user/register", that.registerForm)
                .then(resp => {
                    if (resp.data.code === 1) {
                        that.$message.success(resp.data.msg)
                        that.$router.push({path: "/login"})
                    } else {
                        that.$message.error(resp.data.msg)
                    }
                })
        }
    }
}
</script>

<style scoped>

</style>