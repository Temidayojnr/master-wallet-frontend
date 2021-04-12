import Vue from 'vue'

import VueRouter from "vue-router";

import store from './components/store'

// import Router from 'vue-router'

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
            meta: {requiresAuth: true},
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
             component: Register
        },
        {
            path: '/users',
            component: UserList,
            meta: {requiresAuth: true},
        }
    ];

    const router = new VueRouter({
        mode: "history",
        routes,
      });
      
      router.beforeEach((to, from, next) => {
        if (to.matched.some((record) => record.meta.requiresAuth)) {
          if (store.getters.isAuthenticated) {
            next();
            return;
          }
          next("/login");
        } else {
          next();
        }
      });

export default router;