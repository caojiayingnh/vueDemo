import Vue from 'vue'
import Router from 'vue-router'



const Introduction = resolve => require(['@/components/pages/Introduction'], resolve)
const MVVM = resolve => require(['@/components/pages/VModel/MVVM'], resolve)
const VModelIndex = resolve => require(['@/components/pages/VModel/index'], resolve)
const AxiosDemo = resolve => require(['@/components/pages/Axios/AxiosDemo'], resolve)
const AxiosIndex = resolve => require(['@/components/pages/Axios/index'], resolve)
const RouterIndex = resolve => require(['@/components/pages/Router/index'], resolve)
const Todo = resolve => require(['@/components/pages/todo'], resolve)
const Component = resolve => require(['@/components/pages/ComponentIntro/CompoIntro'], resolve)

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
      path: '/mvvm',
      name: 'mvvm',
      component: MVVM
    },
    {
      path: '/vmodelindex',
      name: 'vmodelIndex',
      component: VModelIndex
    },
    {
      path: '/routerindex',
      name: 'routerIndex',
      component: RouterIndex
    },
    {
      path: '/axiosdemo',
      name: 'axiosDemo',
      component: AxiosDemo
    },
    {
      path: '/axiosindex',
      name: 'axiosIndex',
      component: AxiosIndex
    },
    {
      path: '/component',
      name: 'component',
      component: Component
    },
    {
      path: '/xxx',
      name: 'xxx',
      component: Todo
    }
  ]
})
