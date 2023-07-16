<template>
    <div id="app" class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import {mapState} from "vuex";
import {mapMutations} from "vuex";

export default {
    computed: {
        ...mapState("webInfo", ["title"])
    },
    created() {
        this.getInfo()
        this.checkLogin()
    },
    methods: {
        ...mapMutations("webInfo", ["xSetResources"]),
        ...mapMutations("user", ["xSetUser", "xSetHead"]),
        getInfo() {
            let that = this
            this.$axios.get("/web/info/getInfo")
                .then(resp => {
                    if (resp.data.code === 1) {
                        that.xSetResources(resp.data.data)
                    }
                    document.title = that.title
                })
        },
        checkLogin() {
            let that = this
            this.$axios.get("/web/user/checkLogin")
                .then(resp => {
                    if (resp.data.code === 1) {
                        that.xSetUser(resp.data.data)
                        that.getTextureHead()
                    }
                })
        },
        getTextureHead() {
            let that = this
            let id = that.$store.state.user.id
            this.$axios.get("/web/profile/getHeadById/" + id)
                .then(resp => {
                    if (resp.data.code === 1) {
                        that.xSetHead(resp.data.data.headBase64Str)
                    }
                })
        },
    }
}
</script>

<style>
body {
    margin: 0;
    border: 0;
    padding: 0;
}

::-webkit-scrollbar {
    width: 0;
    background: #000000;
}
</style>
