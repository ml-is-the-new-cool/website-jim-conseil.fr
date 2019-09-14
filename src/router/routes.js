import { Trans } from '@/plugins/Translation'
import TheContent from '@/components/TheContent.vue'

function load (component) {
  return () => import(/* webpackChunkName: "[request]" */`@/pages/${component}.vue`)
}

export default [
  {
    path: '/:lang',
    component: TheContent,
    beforeEnter: Trans.routeMiddleware,
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
