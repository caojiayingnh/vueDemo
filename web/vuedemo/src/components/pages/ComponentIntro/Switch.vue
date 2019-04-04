
<style>
  .v-enter,
  .v-leave-to{
    opacity: 0;
    transform: translateX(200px);
  }

  .v-enter-active,
  .v-leave-active{
    transition: all 1s ease;
  }
</style>

<template>
  <div id="app">
    <!--<a href="#" @click.prevent="flag='login'">登录</a>-->
    <!--<a href="#" @click.prevent="flag='register'">注册</a>-->

    <login v-if="flag='login'"></login>>
    <register v-if="flag=register"></register>
    <transition mode="out-in">
      <!--mode属性设置生产者消费者模式-->
      <component :is="flag"></component>
      <!--component是一个占位符，：is，用来指定展示组件的名称，通过绑定变量来实现切换-->
    </transition>
  </div>
</template>
<!--通过v-if或者v-else切换显示注册和登录，但是只能在两种状态下切换-->
<script>
  import login from './login.vue'
  export default {
    data(){
      return{
        flag:'login'

      }
    },
    components: {
      login,
      register

    },
  }
</script>

