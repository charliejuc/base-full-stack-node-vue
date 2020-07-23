import Vue from 'vue'
import { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import { CustomRouter } from './CustomRouter'

Vue.use(CustomRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "about" */ '../views/About.vue'
    //         )
    // }
]

const router = new CustomRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
