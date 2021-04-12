import Vue from 'vue'

import Router from 'vue-router'

import Home from './views/Home.vue'

import Login from './components/Login.vue'

import Register from './components/Register.vue'

import UserList from './components/UserList.vue'

// import store from './components/store'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            // beforeEnter: (to, from, next) => {
            //     console.log(store.getters);
            // }
        },
        {path: '/login', component: Login},
        {path: '/register', component: Register},
        {path: '/users', component: UserList}
    ]
})