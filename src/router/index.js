import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    { path: '/', component: ()=> import("../views/Home.vue") },
    { path: '/about', component: ()=> import("../views/About.vue") },
]

const index = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default index