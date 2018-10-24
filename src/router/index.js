import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import topackage from '@/components/package/index'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  // base: '/dist',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/package',
      name: 'package',
      component: topackage
    }

  ]
})
