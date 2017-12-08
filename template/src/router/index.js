import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home/home'
import {Login, Cache} from 'kalix-base'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {path: '/:app', name: 'header', component: Home},
        {path: '/:app/:fun', name: 'navigator', component: Home}
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
