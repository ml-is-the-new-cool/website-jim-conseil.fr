import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// scss & js
import Bulma from 'bulma'
Vue.use(Bulma);
import './assets/scss/core.scss'
import './assets/js/main.js'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
