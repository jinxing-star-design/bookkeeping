import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import Money from '@/views/Money.vue';
import Labels from '../views/Labels.vue';
import Statistics from '../views/Statistics.vue'

Vue.use(VueRouter)

const routes  = [
  {
    path: '/',
    redirect: '/money'
    //默认访问的是money路径
  },
  {
    path: '/money',
    component: Money  
    // 当用户访问这个路径时，要将money组件显示在App.vue中的router-view中
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path:'/statistics',
    component: Statistics
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
