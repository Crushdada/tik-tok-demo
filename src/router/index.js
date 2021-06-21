/* jshint esversion: 6 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/index.vue'),
        children: [
          {
            path: 'VideoList',
            component: () => import('../components/index/VideoList.vue')
          }
        ]
      },
      {
        path: 'follow',
        name: 'follow',
        component: () => import('../views/follow.vue')
      },
      {
        path: 'me',
        name: 'me',
        component: () => import('../views/me/me.vue')
      },
      {
        path: 'msg',
        name: 'msg',
        component: () => import('../views/msg/msg.vue')
      }
    ]
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('../views/sign.vue')
  },
  {
    path: '/tpsign',
    name: 'tpsign',
    component: () => import('../views/tpsign.vue')
  },
  {
    path: '/code',
    name: 'code',
    component: () => import('../views/code.vue')
  },
  {
    path: '/toast',
    name: 'toast',
    component: () => import('../components/toast/toast.vue')
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('../views/me/edit.vue')
  },
  {
    path: '/publish',
    name: 'publish',
    component: () => import('../views/publish/publish.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
