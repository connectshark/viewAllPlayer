import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/author',
    name: 'author',
    component: () => import('../views/author.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router
