import {createRouter, createWebHistory} from "vue-router";
import Index from "@/pages/Index";
import Workflow from "@/pages/Workflow";
import Session from "@/pages/Session";


const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/session',
        component: Session
    },
    {
        path: '/workflow',
        component: Workflow
    },
    {
        path: '/performer',
        component: Performer
    },
    {
        path: '/line_manager',
        component: LineManager
    },
    {
        path: '/activity_manager',
        component: ActivityManager
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;