import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// scss & js
import Bulma from 'bulma'
import AOS from 'aos'
import 'aos/dist/aos.css'
Vue.use(Bulma);
import './assets/scss/core.scss'
import './assets/js/main.js'

// i18n
import * as setupi18n from './i18n';
const i18n = setupi18n.i18n;

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init()
  },
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
