import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/home/Home')
const Cate = () => import('@/views/cate/Cate')
const Me = () => import('@/views/me/Me')
const cateDetail = () => import('@/views/detail/cateDetail')
const artDetail = () => import('@/views/detail/artDetail')
Vue.use(VueRouter)

const routes =[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/cate',
        component:Cate
    },
    {
        path:'/me',
        component:Me
    },
    {
        path:'/detailCate',
        component:cateDetail
    },
    {
        path:'/artDetail',
        component:artDetail
    }
]
const router = new VueRouter({
    routes
})

export default router
