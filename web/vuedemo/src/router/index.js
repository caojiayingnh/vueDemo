import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


const Introduction = resolve => require(['@/components/pages/introduct/Introduction'], resolve)
const VModelIndex = resolve => require(['@/components/pages/VModel/index'], resolve)
const AxiosDemo = resolve => require(['@/components/pages/Axios/AxiosDemo'], resolve)
const AxiosIndex = resolve => require(['@/components/pages/Axios/index'], resolve)
const RouterIndex = resolve => require(['@/components/pages/Router/index'], resolve)
const Component = resolve => require(['@/components/pages/ComponentIntro/CompoIntro'], resolve)
const ComponentDemo = resolve => require(['@/components/pages/ComponentIntro/ComDi'], resolve)
const ComponentSwitch = resolve => require(['@/components/pages/ComponentIntro/Switch'], resolve)


export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      base: '/dist/',
      redirect: '/intro'
    },
    {
      path: '/intro',
      name: 'intro',
      component: Introduction
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
      path: '/axiosIndex',
      name: 'axiosIndex',
      component: AxiosIndex
    },
    {
      path: '/componentDemo',
      name: 'componentDemo',
      component: ComponentDemo
    },
    {
      path: '/componentSwitch',
      name: 'componentSwitch',
      component: ComponentSwitch
    },
    {
      path: '/component',
      name: 'component',
      component: Component
    }

  ]
})
