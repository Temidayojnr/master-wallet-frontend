import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './axios'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import store from './components/store'
import axios from 'axios'

axios.defaults.baseURL = 'https://master-wallet-fgp8w.ondigitalocean.app/api/v1';

import vuetify from './plugins/vuetify';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(require('vue-moment'));

Vue.config.productionTip = false



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
