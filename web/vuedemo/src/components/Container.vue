<template lang='pug'>
 .console-page
   el-container.container
     el-aside.nav-menu
         Navmenu
     el-main
         slot
</template>

<script>
import Navmenu from './Navmenu'

export default {
  name: 'Container',
  components: {
    Navmenu
  }
}
</script>

<style scoped>
  .console-page{
    background: #fbfbff;
    height: 100vh;
  }
  .nav-menu{
    height: 100%;
    background-color: #333333;
    border: none;
  }
  .container{
    height: 100%;
  }
</style>
