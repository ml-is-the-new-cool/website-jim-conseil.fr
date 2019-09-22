import { Trans } from '@/plugins/Translation'
import TheApp from '@/App.vue'

function load (component) {
  return () => import(/* webpackChunkName: "[request]" */`@/pages/${component}.vue`)
}

/*
function deactivateNavbars(to, from, next) {
  console.log('entered');
  this.$store.commit('activateNavBar', false);
  this.$store.commit('activateNavBarBis', false);
  this.$store.commit('showNavBar', false);
  this.$store.commit('showNavBarBis', false);

  next();
}
*/

export default [
  {
    path: '/:lang',
    component: TheApp,
    beforeEnter: Trans.routeMiddleware,
    //beforeRouteUpdate: deactivateNavbars,
    children: [
      {
        path: '',
        name: 'home',
        component: load('Home')
      },
      {
        path: 'services',
        name: 'services',
        component: load('Services')
      },
      {
        path: 'about',
        name: 'about',
        component: load('About')
      },
      {
        path: 'legals',
        name: 'legals',
        component: load('Legals')
      },
      {
        path: '*',
        component: load('NotFound')
      }
    ]
  },
  {
    path: '',
    redirect() {
      return Trans.getUserSupportedLang()
    }
  },
  {
    path: '*',
    redirect() {
      return Trans.getUserSupportedLang()
    }
  }
]
