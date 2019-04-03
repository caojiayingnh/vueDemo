
<template>
 <div>
<div id='app'>
  <!-- 如果使用组件，直接，把组件的名称，以HTML标签的形式，引入到页面中，即可 -->
  <!-- 定义的时候可以用驼峰法，但是调用时必须使用“-” -->
  <my-com1></my-com1>
  <mycom2></mycom2>
  <mycom3></mycom3>
  <mycom4></mycom4>
</div>
<!-- 在 被控制的 #app外面，使用template元素，定义组件的HTML结构 -->
<div id="tmp1">
  <div>
    <h3>这是通过template元素，在外部创建的组件</h3>
    <p>好用，不错</p>
  </div>
</div>
 </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'ComponentDemo'
  }

  // 1.1、 使用Vue.extend 来创建全局的Vue组件
  let com1 = Vue.extend({
    // 通过temloate属性，指定了组件要展示的HTML结构
    template: '<h3>这是用Vue.extend创建的组件</h3>'//内部必须只有一个根节点
  })
  // 1.2、使用Vue.component('组件的名称',创建出来的的组件模板对象)
  // 定义的时候可以用驼峰法，但是调用时必须使用“-”
  Vue.component('myCom1', com1)
  // 1.3、合并写法
  Vue.component('mycom2', Vue.extend({
    // 通过temloate属性，指定了组件要展示的HTML结构
    template: '<h3>这是用Vue.component两步合并创建的组件</h3>'//内部必须只有一个根节点
  }))
  // 2.1
  Vue.component('mycom3', {
    template: '<h3>这是用Vue.component一步创建的组件</h3>'//内部必须只有一个根节点
  })

  // 3.1
  Vue.component('mycom4', {
    template: '#tmp1'
  })
  // 实例化vue对象
  let vm = new Vue({
    // 绑定对象
    el: '#app',
    data: {},
    methods: {}
  })
</script>

