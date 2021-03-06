import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router);

export default new Router ({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'exact-active',

  scrollBehavior(to, from, savedPosition) {
    //if (savedPosition)
    //  return savedPosition;

    return { x: 0, y: 0 }
  }
})
