import Vue from 'vue'

import VueRouter from "vue-router"

import Home from './views/Home.vue'

import Login from './components/Login.vue'

import Register from './components/Register.vue'

import UserList from './components/UserList.vue'

import store from './components/store'

import Router from "vue-router"

Vue.use(VueRouter)


    const routes = [
        {
            path: '/login',
            component: Login,
            meta: {requiresAuth: false},
        },
        {
            path: '/register',
             component: Register
        },
        {
            path: '/',
            component: Home,
            meta: {requiresAuth: true},
        },
        {
            path: '/users',
            component: UserList,
            meta: {requiresAuth: true},
        }
    ]

    const router = new VueRouter({
        mode: "history",
        base: process.env.BASE_URL,
        routes,
    });

    // router.beforeEach((to, from, next) => {
    //     if (to.matched.some(record => record.meta.requiresAuth)) {
    //         if (store.getters.loggedIn) {
    //             next()
    //             return
    //         }
    //         router.push({ path: '/' });
    //     } else {
    //         next()
    //     }
    // })

    router.beforeEach((to, from, next) => {
        if(to.matched.some(record => record.meta.requiresAuth)) {
          if (store.getters.loggedIn) {
            next()
            return
          }
          next()
        } else {
          next()
        }
    })

    const originalPush = Router.prototype.push
    Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
    }
    

export default router;