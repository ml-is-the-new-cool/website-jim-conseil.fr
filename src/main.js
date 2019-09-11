import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './plugins/store';
import { i18n } from './plugins/i18n';
import { Trans } from './plugins/Translation';
import VueMeta from 'vue-meta';
import './registerServiceWorker';              // spa support
import AOS from 'aos';                         // https://michalsnik.github.io/aos/
import 'aos/dist/aos.css';
import './assets/styles/core.scss';            // css and js scripts


Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans);

Vue.config.devtools = process.env.NODE_ENV === 'development';
Vue.config.productionTip = false;

Vue.use(VueMeta);

new Vue({
  created() {
    AOS.init()
  },
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');

window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = App.constructor;
