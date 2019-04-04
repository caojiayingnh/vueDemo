<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="vue简介">
        <div class="title">什么是Vue</div>

        <el-card class="box-card">

          <div key="1" class="text item">
            VUE是一个简单、好用、易上手、扩展性强的框架
          </div>
          <div key="1" class="text item">
            VUE是一种MVVM架构的前端框架，提供对View 和 ViewModel 的双向数据绑定
          </div>
          <div key="2" class="text item">
            Vue是一个组件化的构建系统，允许我们使用小型、独立和通常可复用的组件构建大型应用。
          </div>
        </el-card>
        <br>
        <br>
        <div class="title">单页应用程序</div>
        <div class="description">VUE是一种MVVM架构的前端框架，提供对View 和 ViewModel 的双向数据绑定</div>
        <img src="../../../assets/construct.jpg" height="180" width="300" />
        <div class="description">其中template下是html，script下是js，style下是css</div>

        <br>
      </el-tab-pane>
      <el-tab-pane label="VUE的项目架构">
        <div class="title">VUE和其他框架的对比</div>
        <div class="description">VUE是一种MVVM架构的前端框架，提供对View 和 ViewModel 的双向数据绑定</div>
      </el-tab-pane>
      <el-tab-pane label="VUE的特性">
        <div class="title">VUE的生命周期</div>
        <div class="description">VUE是一种MVVM架构的前端框架，提供对View 和 ViewModel 的双向数据绑定</div>

      </el-tab-pane>
      <el-tab-pane label="WHY VUE">

        <div class="title">VUE和其他框架的对比</div>
        <div class="description">VUE是一种MVVM架构的前端框架，提供对View 和 ViewModel 的双向数据绑定</div>
        <br>
        <br>
        <div class="title">好看易上手的丰富组件库</div>
        <div class="description">Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Introduction"
};
</script>

<style scoped>
.title {
  font-size: 25px;
  padding: 10px 0;
}

.description {
  font-size: 20px;
  padding: 10px;
}
br {
  height: 1px;
  border: black 1px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
