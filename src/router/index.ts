import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '@/views/Money.vue'
import Labels from '@/views/Labels.vue'
import Statistics from '@/views/Statistics.vue'
import NotFound from '@/views/NotFound.vue'
import EditLabel from '@/views/EditLabel.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/money',//redirect重定向:上面这个链接重新指定这个链接
  },
  {
    path:'/money',
    component:Money //路由的匹配是从上到下慢慢匹配的
  },
  {
    path:'/labels',
    component:Labels //如果是VScode要自动引入，就安装一个auto import插件
  },
  {
    path:'/statistics',
    component:Statistics //如果是VScode要自动引入，就安装一个auto import插件
  },
  {
    path:'/labels/edit/:id',
    component:EditLabel
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
