import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import header from '@/components/header'
import detail from '@/components/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
     {
      path: '/header',
      component: header
    },
     {
      path: '/detail/:title',
      name: 'detail',
      component: detail
    }
  ]
})
