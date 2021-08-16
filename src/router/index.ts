import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Money from '@/views/Money.vue'
import Labels from '@/views/Labels.vue'
import Statistics from '@/views/Statistics.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/money',//redirect重定向需要好好的去补一下资料
  },
  {
    path:'/money',
    component:Money //如果是VScode要自动引入，就安装一个auto import插件
  },
  {
    path:'/labels',
    component:Labels //如果是VScode要自动引入，就安装一个auto import插件
  },
  {
    path:'/statistics',
    component:Statistics //如果是VScode要自动引入，就安装一个auto import插件
  },
]

const router = new VueRouter({
  routes
})

export default router
