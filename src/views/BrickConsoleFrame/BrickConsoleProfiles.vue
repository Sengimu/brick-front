<template>
    <div style="margin-top: 20px">
        <el-row>
            <el-col :span="22" :offset="1">
                <el-card :style="`height:`+($store.state.webInfo.consoleInHeight-240)+`px`">
                    <el-row>
                        <el-button type="primary" @click="createProfileVisible=true">新建角色</el-button>
                    </el-row>

                    <hr>

                    <el-row>
                        <el-table :data="profilesTable" style="width: 100%">
                            <el-table-column
                                prop="name"
                                label="角色名"
                                width="200">
                            </el-table-column>
                            <el-table-column
                                label="材质"
                                width="300">
                                <template slot-scope="scope">
                                    <img :src="`data:image/png;base64,` + scope.row.headBase64Str"/>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="操作">
                                <template slot-scope="scope">
                                    <el-button
                                        size="mini"
                                        @click="putTexture(scope.row.id)">添加材质
                                    </el-button>
                                    <el-button
                                        size="mini"
                                        type="danger"
                                        @click="deleteTexture(scope.row.id)">删除材质
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-row>

                </el-card>
            </el-col>
        </el-row>


        <el-dialog title="新建角色" :visible.sync="createProfileVisible" width="30%">
            <el-input v-model="createProfileName" placeholder="请输入角色名"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="createProfileVisible = false">取 消</el-button>
                <el-button type="primary" @click="createProfile">确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog title="添加材质" :visible.sync="uploadTextureVisible" width="30%">
            <div style="margin-bottom: 30px">
                <el-radio v-model="uploadObj.model" label="default">Steven</el-radio>
                <el-radio v-model="uploadObj.model" label="slim">Alex</el-radio>
            </div>
            <br>
            <div style="margin-bottom: 40px;margin-top: 0">
                <el-radio v-model="uploadObj.textureType" label="SKIN">皮肤</el-radio>
                <el-radio v-model="uploadObj.textureType" label="CAPE" disabled>披风</el-radio>
            </div>
            <el-upload
                class="upload-demo"
                ref="upload"
                action="/web/profile/uploadTexture"
                :with-credentials="true"
                :data="uploadObj"
                :limit="1"
                :on-exceed="handleExceed"
                :before-upload="beforeUpload"
                :on-success="handleAvatarSuccess"
                :file-list="fileList"
                :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">选取图片</el-button>
            </el-upload>
            <span slot="footer" class="dialog-footer">
                <el-button @click="uploadTextureVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitUpload">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            profilesTable: [],

            createProfileVisible: false,
            createProfileName: "",

            uploadTextureVisible: false,
            fileList: [],
            uploadObj: {
                id: "",
                model: "default",
                textureType: "SKIN"
            }
        }
    },
    created() {
        this.getProfilesByUserId()
    },
    methods: {
        getProfilesByUserId() {
            let that = this;
            this.$axios.post("/web/profile/getProfilesByUserId/" + that.$store.state.user.id)
                .then(resp => {
                    if (resp.data.code === 1) {
                        that.profilesTable = resp.data.data
                    } else {
                        that.$message.error(resp.data.msg)
                    }
                })
        },
        createProfile() {
            let that = this;
            this.$axios.post("/web/profile/createProfile", {createProfileName: that.createProfileName})
                .then(resp => {
                    if (resp.data.code === 1) {
                        that.$message.success(resp.data.msg)
                        that.getProfilesByUserId();
                    } else {
                        that.$message.error(resp.data.msg)
                    }
                })
        },
        deleteTexture(id) {
            let that = this;
            this.$axios.delete("/web/profile/" + id + "/SKIN")
                .then(resp => {
                    if (resp.data.code === 1) {
                        that.$message.success(resp.data.msg)
                        that.getProfilesByUserId()
                        that.getTextureHead()
                    } else {
                        that.$message.error(resp.data.msg)
                    }
                })
        },
        putTexture(id) {
            this.uploadObj.id = id
            this.uploadTextureVisible = true
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
        },
        submitUpload() {
            this.$refs.upload.submit()
        },
        beforeUpload() {
        },
        handleExceed() {
            this.$message.warning(`当前限制选择 1 张材质`);
        },
        handleAvatarSuccess() {
            this.getProfilesByUserId();
            this.getTextureHead()
            this.uploadTextureVisible = false;
        }
    }
}
</script>

<style scoped>
.el-card {
    text-align: left;
    border-radius: 4px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.08)
}

hr {
    background-color: #a8a8a8;
    border: none;
    height: 1px;
}
</style>