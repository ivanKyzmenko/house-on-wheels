import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Gallery from './views/Gallery.vue'
import Inventory from './views/Inventory.vue'
import Faq from './views/Faq.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: Inventory
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    }
  ]
})
