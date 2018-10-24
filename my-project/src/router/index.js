import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Frontpage from '@/components/Frontpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      path: '/',
      name: 'Frontpage',
      component: Frontpage
    }
  ]
})
