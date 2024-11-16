import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import test from "../views/test.vue"
import test2 from "../views/test2.vue"
import test3 from "../views/test3.vue"
import kb from "../views/kb.vue"
import lbb from "../views/lbb.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/lbb',
    name: 'lbb',
    component: lbb
  },
  {
    path: '/test2',
    name: 'test2',
    component: test2
  },
  {
    path: '/test3',
    name: 'test3',
    component: test3
  },
  {
    path: '/kb',
    name: 'kb',
    component: kb
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
