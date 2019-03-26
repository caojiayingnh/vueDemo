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
    background: #eeeeee;
    height: 100vh;
  }
  .nav-menu{
    height: 100%;
    background-color: #666666;
  }
  .container{
    height: 100%;
  }
</style>
