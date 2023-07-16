import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: () => import("@/views/BrickFrame/BrickFrame.vue"),
            redirect: "/main",
            children: [
                {
                    path: "/main", component: () => import("@/views/BrickFrame/BrickMain.vue")
                }
            ]
        },
        {
            path: "/console",
            component: () => import("@/views/BrickConsoleFrame/BrickConsoleFrame.vue"),
            redirect: "/console/profiles",
            children: [
                {
                    path: "/console/profiles",
                    component: () => import("@/views/BrickConsoleFrame/BrickConsoleProfiles.vue")
                }
            ]
        },
        {
            path: "/login", component: () => import("@/views/BrickLogin.vue")
        },
        {
            path: "/register", component: () => import("@/views/BrickRegister.vue")
        },
        {
            path: "/setup", component: () => import("@/views/BrickSetup.vue")
        },
        {
            path: "*", component: () => import("@/views/BrickError404.vue")
        }
    ]
})

export default router