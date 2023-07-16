const state = {
    consoleInHeight: 0,

    title: "积木brick - yggdrasil验证端",
    logoUrl: require("@/assets/logo.png"),
    bgUrls: [require("@/assets/bg.jpg")]
}

const mutations = {
    xSetConsoleInHeight(state, consoleInHeight) {
        state.consoleInHeight = consoleInHeight
    },
    xSetResources(state, obj) {
        state.title = obj.title
        state.logoUrl = obj.logoUrl
        state.bgUrls = obj.bgUrls
    }
}

const actions = {}
const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}