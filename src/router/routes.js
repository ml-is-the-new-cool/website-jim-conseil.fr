import { Trans } from '@/plugins/Translation'
import TheRoot from '@/components/TheRoot.vue'

function load (component) {
  console.log('you asked for', component);
  return () => import(/* webpackChunkName: "[request]" */`@/pages/${component}.vue`)
}

export default [
  {
    path: '/:lang',
    component: TheRoot,
    beforeEnter: Trans.routeMiddleware,
    children: [
      {
        path: '',
        name: 'home',
        component: load('Home'),
        meta: {
          title: 'Home | JIM Conseil'
        }
      },
      {
        path: 'services',
        name: 'services',
        component: load('Services'),
        meta: {
          title: 'Services | JIM Conseil'
        }
      },
      {
        path: 'methodology',
        name: 'methodology',
        component: load('Methodology'),
        meta: {
          title: 'Methodology | JIM Conseil'
        }
      },
      {
        path: 'about',
        name: 'about',
        component: load('About'),
        meta: {
          title: 'About | JIM Conseil'
        }
      },
      {
        path: 'contact',
        name: 'contact',
        component: load('Contact'),
        meta: {
          title: 'Contact | JIM Conseil'
        }
      },
      {
        path: 'leaflet',
        name: 'leaflet',
        component: load('Leaflet'),
        meta: {
          title: 'Leaflet | JIM Conseil'
        }
      },
      {
        path: '*',
        name: '404',
        component: load('404'),
        meta: {
          title: '404 - Not Found | JIM Conseil'
        }
      }
    ]
  },
  {
    path: '*',
    redirect() {
      return Trans.getUserSupportedLang()
    }
  }
]
