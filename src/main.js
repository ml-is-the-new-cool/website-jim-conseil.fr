import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './plugins/i18n';
import { Trans } from './plugins/Translation'
import './registerServiceWorker'              // spa support
import AOS from 'aos'                         // https://michalsnik.github.io/aos/
import 'aos/dist/aos.css'
import './assets/styles/core.scss'            // css and js scripts

import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC7-9tU5VL1l96hrZeAb6ugsSUtf9LsviM',
    libraries: 'places'
  }
});

Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans);

Vue.config.devtools = process.env.NODE_ENV === 'development';
Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init()
  },
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');

window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = App.constructor;
