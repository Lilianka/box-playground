import Vue from 'vue'
import Router from 'vue-router'
import Flex from './views/Flex.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'flex',
      component: Flex
    },
    {
      path: '/grid',
      name: 'grid',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "grid" */ './views/Grid.vue')
    },
    {
      path: '/play-ground',
      name: 'play-ground',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "play-ground" */ './views/PlayGround.vue')
    }
  ]
})
