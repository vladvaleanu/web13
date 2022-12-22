import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Recipes from '../views/Recipes.vue'
import Account from '../views/Account.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/recipes',
            component: Recipes
        },
        {
            path: '/account',
            component: Account
        },
        {
            path: '/recipe/:slug',
            name: 'Recipe',
            component: () => import('../views/Recipe.vue')
        }
    ]
})

export default router;