<template>
  <el-carousel
  indicator-position="outside"
  :autoplay="false"
  height="650px">
    <el-carousel-item>
      <div class="content">
        <div class="para">vue-router是vue中提供的路由管理，即提供路径到组件的映射，实现了vue的单页面</div>
        <div class="para">使用方法</div>
        <div class="img"><img src="../../../assets/router/use.png" height="49" width="343"/></div>
        <div class="img">
          <img class="img2" src="../../../assets/router/router.png" height="328" width="289"/>
          <img class="img2" src="../../../assets/router/router2.png" height="472" width="355"/>
        </div>
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="content">
        <div class="para">注入</div>
        <div class="img">
          <img src="../../../assets/router/routerview3.png" height="80" width="368"/>
        </div>
        <div class="para">全局注册</div>
        <div class="img">
          <img src="../../../assets/router/router3.png" height="137" width="250"/>
        </div>
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="content">
        <div class="para">跳转</div>
        <div class="img">
          <img src="../../../assets/router/link.png" height="75" width="516"/></div>
        <div class="para">
          <router-link to="/page1">link</router-link>
        </div>
        <div class="para">js跳转</div>
        <div>
          <img src="../../../assets/router/routerPush.png" height="38" width="314"/>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
    export default {
      name: "index",
      data () {
        return {
        }
      }
    }
</script>

<style scoped>
.el-carousel__item{
  background-color: #ffffff;
}
  .content{
    height: 650px;
    padding: 30px 60px;
  }

  .para{
    margin: 0 0 30px 0;
    font-size: 24px;
  }

  .img{
    margin-bottom: 30px;
  }

  .img2{
    margin-right: 50px;
  }
</style>
