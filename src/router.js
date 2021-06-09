import Vue from 'vue'

import VueRouter from "vue-router"

import Home from './views/Home.vue'

import Login from './components/Login.vue'

import Register from './components/Register.vue'

import UserList from './components/UserList.vue'

import TransactionList from './components/TransactionList.vue'

import UserEdit from './components/UserEdit.vue'

// import store from './components/store'

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
            redirect: '/dashboard'
        },
        {
            path: '/dashboard',
            component: Home,
            meta: {requiresAuth: true},
        },
        {
            path: '/users',
            component: UserList,
            meta: {requiresAuth: true},
        },
        {
            path: '/user/:id',
            // name: 'edit-agent',
            component: UserEdit,
            meta: {requiresAuth: true},
        },
        {
            path: '/transactions',
            component: TransactionList,
            meta: {requiresAuth: true},
        }
    ]

    const router = new VueRouter({
        mode: "history",
        base: process.env.BASE_URL,
        routes,
    });

    router.beforeEach((to, from, next) => {
        if(to.matched.some(record => record.meta.requiresAuth)) {
          if (localStorage.getItem('user-token')) {
              console.log('Logged IN')
            next()
            return
          }
          console.log('Not logged IN')
          next('/login')
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