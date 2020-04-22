import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children: [
      {
        path: '/',
        name: 'Kanban',
        component: () => import(/* webpackChunkName: "kanban" */ '../views/Kanban.vue')
      },
      {
        path: '/store',
        name: 'Store',
        component: () => import(/* webpackChunkName: "store" */ '../views/Store.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
