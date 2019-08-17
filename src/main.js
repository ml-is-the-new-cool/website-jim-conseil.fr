import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './plugins/i18n';
import { Trans } from './plugins/Translation'
// spa support
import './plugins/registerServiceWorker'
// bulma css framework
import Bulma from 'bulma'
// Animate On Scroll library => https://michalsnik.github.io/aos/
import AOS from 'aos'
import 'aos/dist/aos.css'
// css and js scripts
import './assets/scss/core.scss'
import './assets/js/main.js'

Vue.use(Bulma);
Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans);
Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init()
  },
  el: '#app',
  router,
  i18n,
  render: h => h(App)
});
