import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import './assets/styles/index.scss';
// import './assets/styles/lib/fontawesome-all.min.exec.js';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(Buefy, {
  defaultIconPack: 'fa',
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
