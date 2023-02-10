import {createRouter, createWebHistory} from "vue-router";
import Index from "@/pages/Index";
import Login from "@/pages/Login";
import Callback from "@/pages/Callback";
import Workflow from "@/pages/Workflow";


const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/callback',
        component: Callback
    },
    {
        path: '/workflow',
        component: Workflow
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;