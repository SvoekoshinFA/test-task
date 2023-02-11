import {createRouter, createWebHistory} from "vue-router";
import Index from "@/pages/Index";
import Workflow from "@/pages/Workflow";
import Session from "@/pages/Session";
import Performer from "@/pages/Performer";
import LineManager from "@/pages/LineManager";
import ActivityManager from "@/pages/ActivityManager";


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