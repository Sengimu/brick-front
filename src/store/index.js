import Vue from "vue"
import Vuex from "vuex"

import user from "@/store/modules/user";
import webInfo from "@/store/modules/webInfo";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user,
        webInfo
    }
})

export default store