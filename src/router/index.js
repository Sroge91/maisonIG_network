import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Articles.vue'
import Calendar from '../views/Calendar.vue'
import MyHouse from '../views/MyHouse.vue'
import SearchHouse from '../views/SearchHouse.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Accueil'
        }
    },
    {
        path: '/articles/:id',
        name: 'Article',
        component: Article,
        props: true,
        meta: {
            title: 'Article'
        }
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: Calendar,
        meta: {
            title: 'Calendrier'
        }
    },
    {
        path: '/myhouse',
        name: 'MyHouse',
        component: MyHouse,
        meta: {
            title: 'Ma maison'
        }
    }, {
        path: '/searchHouse',
        name: 'Search House',
        component: SearchHouse,
        meta: {
            title: 'Chercher une autre maison'
        }
    }, {
        path: '/me',
        name: 'Mon profil',
        component: Profile,
        meta: {
            title: 'Mon profil'
        }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.afterEach((to) => {
    document.title = to.meta.title;
})

export default router