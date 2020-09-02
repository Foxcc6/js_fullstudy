import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hello from '@/views/Hello.vue'
// import Hi1 from '@/views/Hi1.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/hi',
    name:'Hello',
    component: Hello,
    children:[
      {
        path:'hi1',
        component: () => import('@/views/Hi1.vue')
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
