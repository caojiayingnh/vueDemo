<template>
  <div class="nav-menu">
    <el-menu background-color="#666666"
             router
             default-active='/intro'
             text-color="#ffffff"
             active-text-color="#66b1ff">
       <el-submenu>
         <template slot="title">
           <span>Vue介绍</span>
         </template>
         <el-menu-item index="/intro">什么是Vue</el-menu-item>
       </el-submenu>
       <el-menu-item index="/vmodel">V-model</el-menu-item>
       <el-menu-item index="/routerintro">Router</el-menu-item>
       <el-menu-item index="/xxx">xxxxx</el-menu-item>
       <el-menu-item index="/xxx">xxxxx</el-menu-item>
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
