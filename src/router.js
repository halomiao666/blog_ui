import Vue from 'vue'
import VueRouter from 'vue-router'
import Blogs from './pages/blogs.vue'
import Achievements from './pages/achievements.vue'
import Others from './pages/others.vue'
// import BlogDetail from './pages/blog_detail.vue'


Vue.use(VueRouter)


const routes = [
    { path: '/', name: 'home', component: Blogs },
    { path: '/block/:blockname', name: 'block', component: Blogs },
    { path: '/detail/:id', name: 'detail', component: Blogs },
    { path: '/achievements', component: Achievements },
    { path: '/others', component: Others },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;