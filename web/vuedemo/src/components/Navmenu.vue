<template>
  <div class="nav-menu">
    <el-menu
      background-color="#333333"
      router
      :default-active='current'
      text-color="#ffffff"
      active-text-color="#66b1ff">
      <el-submenu index="/intro">
        <template slot="title">
          <span>Vue介绍</span>
        </template>
        <el-menu-item index="/intro">什么是Vue</el-menu-item>
      </el-submenu>
      <el-menu-item index="/component">
        <span>Vue Component</span>
      </el-menu-item>
      <el-submenu index="/vmodelindex">
        <template slot="title">
          <span>数据绑定介绍</span>
        </template>
        <el-menu-item index="/vmodelindex">数据绑定</el-menu-item>
      </el-submenu>
      <el-submenu index="/routerindex">
        <template slot="title">
          <span>Router介绍</span>
        </template>
        <el-menu-item index="/routerindex">Router</el-menu-item>
      </el-submenu>
      <el-submenu index="/axiosdemo">
        <template slot="title">
          <span>与后端交互</span>
        </template>
        <el-menu-item index="/axiosIndex">Axios介绍</el-menu-item>
        <el-menu-item index="/axiosdemo">Demo</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'Navmenu',
    data() {
      return {
        current: this.$route.path
      }
    }
  }
</script>

<style scoped>

</style>
