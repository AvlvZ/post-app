const {createWebHistory, createRouter} = require("vue-router/dist/vue-router");
const MainPage = require("@/pages/MainPage");


const routes = [
    {
        path: '/',
        component: MainPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router