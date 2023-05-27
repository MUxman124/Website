import { createRouter, createWebHistory} from 'vue-router'  

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/HelloWorld.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../components/AboutUS.vue'),
    },
    {
        path: '/projects',
        name: 'project',
        component: () => import('../components/ProjectDetail.vue'),
    }
]

const router = createRouter({
    
    history: createWebHistory(),
    routes
})
export default router