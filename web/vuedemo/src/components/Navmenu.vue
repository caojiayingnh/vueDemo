<template>
  <div class="nav-menu">
    <el-menu
      background-color="#333333"
      router
      default-active='/intro'
      text-color="#ffffff"
      active-text-color="#66b1ff">
       <el-submenu index="/intro">
         <template slot="title">
           <span>Vue介绍</span>
         </template>
         <el-menu-item index="/intro">什么是Vue</el-menu-item>
       </el-submenu>
       <el-submenu index="/vmodelindex">
         <template slot="title">
           <span>数据绑定介绍</span>
         </template>
         <el-menu-item index="/vmodelindex">介绍</el-menu-item>
         <el-menu-item index="/mvvm">MVVM架构</el-menu-item>
       </el-submenu>
       <el-submenu index="/routerindex">
         <template slot="title">
           <span>Router介绍</span>
         </template>
         <el-menu-item index="/routerindex">Router</el-menu-item>
       </el-submenu>
       <el-menu-item index="/axiosdemo">与后端交互</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
    export default {
        name: 'Navmenu'
    }
</script>

<style scoped>

</style>
