const state = {
    id: 0,
    name: "未登录",
    headBase64Str: ""
}

const mutations = {
    xSetUser(state, obj) {
        state.id = obj.id
        state.name = obj.username
    },
    xSetHead(state, headBase64Str) {
        state.headBase64Str = headBase64Str
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