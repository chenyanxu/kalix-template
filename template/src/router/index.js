import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import {KalixLogin, KalixHome, Cache} from 'kalix-base'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: KalixLogin
    },
    {
      path: '/',
      name: 'home',
      component: KalixHome,
      children: [
        {path: '/:app', name: 'header', component: KalixHome},
        {path: '/:app/:fun', name: 'navigator', component: KalixHome}
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (Cache.get('id') === null && to.name !== 'login') {
  next({path: '/login'})
}
next()
})

export default router
