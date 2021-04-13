import Vue from 'vue'

import VueRouter from "vue-router"

import Home from './views/Home.vue'

import Login from './components/Login.vue'

import Register from './components/Register.vue'

import UserList from './components/UserList.vue'

// import store from './components/store'

Vue.use(VueRouter)


    const routes = [
        {
            path: '/',
            component: Home,
            // meta: {requiresAuth: true},
        },
        {
            path: '/login',
            component: Login,
            // meta: {requiresAuth: false},
        },
        {
            path: '/register',
             component: Register
        },
        {
            path: '/users',
            component: UserList,
            // meta: {requiresAuth: true},
        }
    ]

    const router = new VueRouter({
        mode: "history",
        base: process.env.BASE_URL,
        routes,
      });

export default router;