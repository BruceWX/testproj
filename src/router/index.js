import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import contact from '../views/contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
  },
  {
    path: '/',
    name: 'contact',
    component: contact
  },
  {
    path: '/styletest',
    name: 'styletest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/styletest.vue')
  }
]

const router = new VueRouter({
  routes  // (缩写) 相当于 routes: routes
})

export default router
