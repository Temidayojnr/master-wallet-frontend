import axios from 'axios'


axios.defaults.withCredentials = true

axios.defaults.baseURL = 'https://master-wallet-fgp8w.ondigitalocean.app/api/v1';


// axios.defaults.headers.common['Authorization'] =  'Bearer ' + localStorage.getItem('token');