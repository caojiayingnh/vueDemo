import Vue from 'vue'
import Router from 'vue-router'

const Introduction = resolve => require(['@/components/pages/Introduction'], resolve)
const VModel = resolve => require(['@/components/pages/VModel'], resolve)
const AxiosDemo = resolve => require(['@/components/pages/AxiosDemo'], resolve)
const RouterIntro = resolve => require(['@/components/pages/RouterIntro'], resolve)
const Todo = resolve => require(['@/components/pages/todo'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/intro'
    },
    {
      path: '/intro',
      name: 'intro',
      component: Introduction
    },
    {
      path: '/vmodel',
      name: 'vmodel',
      component: VModel
    },
    {
      path: '/routerintro',
      name: 'routerIntro',
      component: RouterIntro
    },
    {
      path: '/axiosdemo',
      name: 'axiosDemo',
      component: AxiosDemo
    },
    {
      path: '/xxx',
      name: 'xxx',
      component: Todo
    }
  ]
})
