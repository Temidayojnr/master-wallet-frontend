import axios from 'axios'

axios.defaults.baseURL = 'https://master-wallet-api-dev.herokuapp.com/api/v1';

axios.defaults.headers.common['Authorization'] =  'Bearer ' + localStorage.getItem('token');