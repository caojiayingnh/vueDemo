<template>
  <div>
    <div class="title">什么是Vue</div>
    <br>
    <div class="description">VUE是一种MVVM架构的前端框架，提供对View 和 ViewModel 的双向数据绑定</div>
    <div class="description">Vue是一个组件化的构建系统，允许我们使用小型、独立和通常可复用的组件构建大型应用。
      一个组件本质上是一个拥有预定义选项的一个 Vue 实例。每个Vue组件都有以下结构：
    </div>
    <img src="../../assets/construct.jpg" height="180" width="300"/>
    <div class="description">其中template下是html，script下是js，style下是css</div>
  </div>
</template>

<script>
  export default {
    name: 'Introduction'
  }
</script>

<style scoped>
  .title {
    font-size: 22px;
    padding: 10px 0;
  }

  .description {
    font-size: 20px;
    padding: 10px;
  }
  br{
    height: 1px;
    border: black 1px;
  }
</style>
