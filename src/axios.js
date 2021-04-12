import axios from 'axios'

import store from './components/store'

import router from './router'

axios.defaults.withCredentials = true

axios.defaults.baseURL = 'https://master-wallet-api-dev.herokuapp.com/api/v1';

axios.interceptors.response.use(undefined, function (error) {
    if (error) {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
    
          originalRequest._retry = true;
          store.dispatch('LogOut')
          return router.push('/login')
      }
    }
  })

axios.defaults.headers.common['Authorization'] =  'Bearer ' + localStorage.getItem('token');