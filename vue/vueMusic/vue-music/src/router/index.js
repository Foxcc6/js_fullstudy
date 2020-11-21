import Vue from 'vue'
import VueRouter from 'vue-router'


const search = () => import('@/views/search')
const home = () => import('@/views/home')
const songList = ()=> import('@/views/songList')
const recommend = ()=> import('@/views/recommend')
const singer = ()=> import('@/views/singer')
const ranking = () =>import('@/views/ranking')
const singerList=()=>import('@/views/singerList')
const rankSong = ()=>import('@/views/rankSong')
Vue.use(VueRouter)

  const routes = [

 {
   path:'/',
   name:'home',
   component:home,
   children:[
    {
      path: '/search',
      name: 'search',
      component:search
     },
     {
      path: '/recommend',
      name: 'recommend',
      component:recommend
     },
     {
      path: '/singer',
      name: 'singer',
      component:singer
     },
     {
      path: '/ranking',
      name: 'ranking',
      component:ranking
     },
   ]
 },
 {
  path:'/songList',
  name:'songList',
  component:songList
},
{
  path:'/singerList',
  name:'singerList',
  component:singerList
},
{
  path:'/rankSong',
  name:'rankSong',
  component:rankSong
}
]

const router = new VueRouter({
  linkActiveClass:'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
