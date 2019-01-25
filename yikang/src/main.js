import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/my-mint.scss';
import api from './api';
//引入store
import store from './store'

//import apiConfig from '../config/api.config';
//import Axios from 'axios';
//import VueAxios from 'vue-axios';
//Vue.use(VueAxios,Axios);
//Axios.defaults.baseURL = apiConfig.baseUrl;

Vue.prototype.$api = api;
//Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el:'#app',
 render:h=>h(App),
  router,
  api,
  store
}) 
