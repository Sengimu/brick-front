import Vue from 'vue'
import App from "@/App.vue"
import router from "@/router"
import store from "@/store"

import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import axios from "axios"

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios
//axios.defaults.baseURL = "http://localhost:80"
axios.defaults.withCredentials = true

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')