import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/my-mint.scss';

//Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el:'#app',
 render:h=>h(App),
	router
}) 
