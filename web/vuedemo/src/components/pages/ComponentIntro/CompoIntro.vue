<template>
  <div class="total">
    <div class="title">组件</div>

    <div class="description">组件是可复用的vue实例，组件的出现就是为了拆分vue实例的代码量，能够让我们以不同的组件，来划分不同的功能模块。将来我们要用什么功能，就可以调用相应的组件。</div>
    <div class="subtitle">组件化和模块化的区别：</div>

    <div class="description">组件化：从ui界面角度划分，前端的组件化方便ui组件的重用。</div>

    <div class="description"> 模块化：从代码逻辑角度划分，方便代码分层开发，保证每个功能模块的职能单一
    </div>
    <div class="title">组件的创建</div>

    <div class="subtitle">全局组件</div>

    <div class="description">方法一</div>

    <img src="../../pages/ComponentIntro/gloabl1.png"/><br>
    <div class="description">方法二</div>

    <img src="../../pages/ComponentIntro/global3.png"/><br>
    <div class="description">方法三</div>

    <img src="../../pages/ComponentIntro/global4.png"/><br>
    <div class="codeShow">
      <router-link to="/componentDemo">效果展示</router-link>
    </div>

    <div class="description">注意：内部节点只能有一个根节点</div>

    <img src="../../pages/ComponentIntro/global5.png"/><br><br>
    <img src="../../pages/ComponentIntro/error.png"/> <br>
    <div class="subtitle">私有组件</div>

    <img src="../../pages/ComponentIntro/private.png"><br>
    <div class="title">Vue组件中的data</div>
    <div class="description">组件的data和实例的data不同，组件中的data必须是一个方法，这个方法内部，还必须返回一个对。不然会报错</div>
    <div class="description">因此每个实例可以维护一份被返回对象的独立的拷贝</div>
    <div class="description">不然会影响到所有实例：</div>
    <img src="../../pages/ComponentIntro/wrong-counter.png"/><br>
    <div id="wrong-counter" class="codeShow">
      <div>
        <wrong-counter></wrong-counter>
        <wrong-counter></wrong-counter>
        <wrong-counter></wrong-counter>
      </div>
    </div>
    <div class="description">三个组件内部返回的对象都指向同一个，虽然是三个组件实例，但这三个共享同一个dataObj</div>
    <div class="description">正确方式：</div>
    <img src="../../pages/ComponentIntro/counter.png"/><br>
    <div id="counter" class="codeShow">
      <div id>
        <counter></counter>
        <counter></counter>
        <counter></counter>
      </div>
    </div>
    <div class="title">动态组件</div>
    <div class="subtitle">组件的切换</div>
    <br>
    <div id="app2" class="codeShow">
      <a href="" @click.prevent="comName = 'login' ">登陆</a>
      <a href="" @click.prevent="comName = 'register' ">注册</a>
      <component :is=" comName " class=""></component>
    </div>
    <br>
    <div class="description">vue提供了component来展示对应的组件，component是一个占位符，：is属性可以用来指定要展示的组件名称</div>
    <img src="../../pages/ComponentIntro/switch.png"/><br>
    <div class="title">Prop</div>
    <div class="description">Prop 是你可以在组件上注册的一些自定义特性。当一个值传递给一个 prop 特性的时候，它就变成了那个组件实例的一个属性。</div>
    <br>
    <div class="description">一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop。我们能够在组件实例中访问这个值，就像访问 data 中的值一样。</div>
    <br>
    <img src="../../pages/ComponentIntro/propEg.png"/>
    <div class="subtitle">通过prop向子组件传递数据</div>
    <div class="description">
      所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。额外的，每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。
    </div>
    <div class="description">父组件向子组件传递数值</div>
    <br>
    <img src="../../pages/ComponentIntro/prop11.png"/><br>
    <img src="../../pages/ComponentIntro/prop12.png"/><br>
    <div class="description">父组件向子组件传递方法</div>
    <br>
    <img src="../../pages/ComponentIntro/prop21.png"/><br>
    <img src="../../pages/ComponentIntro/prop22.png"/>
  </div>
</template>


<script>
  import Vue from 'vue'

  export default {
    name: 'ComponentIntro',
    data() {
      return {
        comName: 'login'//当前 component 中的 :is 帮i的那个的组件的名称

      }
    },
  }
  var dataObj = {count: 0}
  Vue.component('wrong-counter', {
    data: function () {
      return dataObj
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })

  Vue.component('counter', {
    data: function () {
      return {count1: 0}
    },
    template: '<button v-on:click="count1++">You clicked me {{ count1 }} times.</button>'
  })
  Vue.component('login', {
    template: '<h3>登陆组件</h3>'
  })

  Vue.component('register', {
    template: '<h3>注册组件</h3>'
  })

  //实例
  var vm2 = new Vue({
    el: '#app2',
    data: {
      comName: 'login',//当前 component 中的 :is 帮i的那个的组件的名称
    },
    methods: {},
  });


</script>

<style scoped>
  .total{
    background-color: ghostwhite;
  }
  .title {
    font-size: 30px;
    margin: 10px 0;
    padding: 10px 0;
    color: navy;
  }

  .subtitle {
    font-size: 25px;
    padding: 10px 0;
    color: darkslategrey;
  }

  .description {
    font-size: 20px;
    padding: 5px 0;
  }

  br {
    height: 10px;
    border: black 1px;
  }

  .codeShow {
    margin:20px;
    background-color: aliceblue;
    padding: 15px 15px;
    text-align: center;
  }
  img{
    margin: 10px;
  }
</style>
