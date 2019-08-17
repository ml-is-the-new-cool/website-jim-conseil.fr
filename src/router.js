import Vue from 'vue'
import Router from 'vue-router'
import Root from './views/Root.vue'
import Home from './views/Home.vue'

// i18n config
import * as i18n from './i18n';
const locale = require('browser-locale')();
const supportedLocales = ['fr'];
const browserLang = (locale || 'fr-FR').substring(0, 2);

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // redirection for every route
    {
      path: '*',
      redirect: `/${browserLang}/home`
    },
    {
      path: '/services',
      redirect: `/${browserLang}/services`
    },
    {
      path: '/methodology',
      redirect: `/${browserLang}/methodology`
    },
    {
      path: '/about',
      redirect: `/${browserLang}/about`
    },
    {
      path: '/contact',
      redirect: `/${browserLang}/contact`
    },
    {
      path: '/leaflet',
      redirect: `/${browserLang}/leaflet`
    },
    // real rendering
    {
      path: '/:locale',
      component: Root,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
          meta: {
            title: 'Home | JIM Conseil'
          }
        },
        {
          path: 'services',
          name: 'services',
          component: () => import('./views/Services.vue'),
          meta: {
            title: 'Services | JIM Conseil'
          }
        },
        {
          path: 'methodology',
          name: 'methodology',
          component: () => import('./views/Methodology.vue'),
          meta: {
            title: 'Methodology | JIM Conseil'
          }
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('./views/About.vue'),
          meta: {
            title: 'About | JIM Conseil'
          }
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('./views/Contact.vue'),
          meta: {
            title: 'Contact | JIM Conseil'
          }
        },
        {
          path: 'leaflet',
          name: 'leaflet',
          component: () => import('./views/Leaflet.vue'),
          meta: {
            title: 'Leaflet | JIM Conseil'
          }
        },
        {
          path: '*',
          redirect: `/${browserLang}/home`
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  let locale = to.params.locale;

  if (!locale) {
    locale = browserLang;
  }

  if (supportedLocales.indexOf(locale) === -1) {
    next('/fr/home');
  } else {
    i18n.loadLanguageAsync(locale).then(() => next());
  }
});

export default router;
